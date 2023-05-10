import { getEventListeners } from 'events';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIsLoadingAction, fetchTestoDangerAction, fetchTestoSuccessAction } from '../../modules/feedback/actions';
import { fetchFormData, resetFormData } from '../../modules/formData/actions';
import { fetchFormDisabled, resetFormDisabled } from '../../modules/formDisabled/actions';
import { fetchFormError, resetFormError } from '../../modules/formError/actions';
import { fetchFormHide, resetFormHide } from '../../modules/formHide/actions';
import gooseFormService from '../../services/GooseFormService';
import { GooseComplexControlType } from '../../type/GooseComplexControlType';
import { GooseComplexRenderConditionalType } from '../../type/GooseComplexRenderConditionalType';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseControlType } from '../../type/GooseControlType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseHttpRequest } from '../../type/GooseHttpRequest';
import { GooseNestType } from '../../type/GooseNestType';
import { GooseRenderType } from '../../type/GooseRenderType';
import { GooseSimpleRenderConditionalType } from '../../type/GooseSimpleRenderConditionalType';
import { GooseStandardControlType } from '../../type/GooseStandardControlType';
import GooseHttpRequestUtil from '../../util/GooseHttpRequestUtil';
import GooseComponent from './GooseComponent';
import GoosePopup from './GoosePopup';

export default function GooseForm(input: GooseNestType) {

    let formError = useSelector((state: any) => state.formError);
    let formData = useSelector((state: any) => state.formData);
    let formHide = useSelector((state: any) => state.formHide);
    let formDisabled = useSelector((state: any) => state.formDisabled);


    let formTmp: GooseFormType = input.form;


    let dispatch = useDispatch();


    const [resettato, setResettato] = React.useState(false);

    const [eseguitaChiamataRecuperoDati, setEseguitaChiamataRecuperoDati] = React.useState(false);
    const [isPrimoCaricamento, setPrimoCaricamento] = React.useState(true);

    const [form, setForm] = React.useState<any>();


    const [aggiuntiEventi, setAggiuntiEventi] = React.useState(false);



    const resetForm = () => {
        dispatch(resetFormData(undefined));
        dispatch(resetFormError(undefined));
        dispatch(resetFormHide(undefined));
        dispatch(resetFormDisabled(undefined));
    }

    const verificaStandardRequired = (controllo: GooseStandardControlType) => {
        if (formData[controllo.idComponentA] == undefined || formData[controllo.idComponentA] == "") {
            formError[controllo.idComponentA] = controllo.errorMessage;
        } else {
            if (formError[controllo.idComponentA] == controllo.errorMessage) {
                formError[controllo.idComponentA] = undefined;
            } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
            }
        }
    }

    const verificaStandardEqual = (controllo: GooseStandardControlType) => {
        if (formData[controllo.idComponentA] != controllo.referenceValue) {
            if (formError[controllo.idComponentA] != undefined) {
                if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                    formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
            } else {
                formError[controllo.idComponentA] = controllo.errorMessage;
            }
        } else {
            if (formError[controllo.idComponentA] == controllo.errorMessage) {
                formError[controllo.idComponentA] = undefined;
            } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
            }
        }
    }

    const verificaStandardNotEqual = (controllo: GooseStandardControlType) => {
        if (formData[controllo.idComponentA] == controllo.referenceValue) {
            if (formError[controllo.idComponentA] != undefined) {
                if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                    formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
            } else {
                formError[controllo.idComponentA] = controllo.errorMessage;
            }
        } else {
            if (formError[controllo.idComponentA] == controllo.errorMessage) {
                formError[controllo.idComponentA] = undefined;
            } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
            }
        }
    }

    const verificaStandardPattern = (controllo: GooseStandardControlType) => {
        const regex = new RegExp(controllo.referenceValue);

        if (!regex.test(formData[controllo.idComponentA])) {
            if (formError[controllo.idComponentA] != undefined) {
                if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                    formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
            } else {
                formError[controllo.idComponentA] = controllo.errorMessage;
            }
        } else {
            if (formError[controllo.idComponentA] == controllo.errorMessage) {
                formError[controllo.idComponentA] = undefined;
            } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
            }
        }
    }

    const verificaStandardIn = (controllo: GooseStandardControlType) => {
        let valoreTrovato: boolean = false;
        controllo.referenceValues.map((valore: String) => {
            if (valore == formData[controllo.idComponentA]) {
                valoreTrovato = true;
            }

        })
        if (!valoreTrovato) {
            if (formError[controllo.idComponentA] != undefined) {
                if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                    formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
            } else {
                formError[controllo.idComponentA] = controllo.errorMessage;
            }
        } else {
            if (formError[controllo.idComponentA] == controllo.errorMessage) {
                formError[controllo.idComponentA] = undefined;
            } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
            }
        }
    }

    const verificaStandardNotIn = (controllo: GooseStandardControlType) => {
        let valoreTrovato: boolean = false;
        controllo.referenceValues.map((valore: String) => {
            if (valore == formData[controllo.idComponentA]) {
                valoreTrovato = true;
            }

        })
        if (valoreTrovato) {
            if (formError[controllo.idComponentA] != undefined) {
                if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                    formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
            } else {
                formError[controllo.idComponentA] = controllo.errorMessage;
            }
        } else {
            if (formError[controllo.idComponentA] == controllo.errorMessage) {
                formError[controllo.idComponentA] = undefined;
            } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
            }
        }
    }

    const verificaStandardMinText = (controllo: GooseStandardControlType) => {
        if (formData[controllo.idComponentA] == undefined || formData[controllo.idComponentA].length < parseInt(controllo.referenceValue)) {
            if (formError[controllo.idComponentA] != undefined) {
                if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                    formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
            } else {
                formError[controllo.idComponentA] = controllo.errorMessage;
            }
        } else {
            if (formError[controllo.idComponentA] == controllo.errorMessage) {
                formError[controllo.idComponentA] = undefined;
            } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
            }
        }
    }

    const verificaStandardMaxText = (controllo: GooseStandardControlType) => {
        if (formData[controllo.idComponentA] == undefined || formData[controllo.idComponentA].length > parseInt(controllo.referenceValue)) {
            if (formError[controllo.idComponentA] != undefined) {
                if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                    formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
            } else {
                formError[controllo.idComponentA] = controllo.errorMessage;
            }
        } else {
            if (formError[controllo.idComponentA] == controllo.errorMessage) {
                formError[controllo.idComponentA] = undefined;
            } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
            }
        }
    }

    const verificaStandardMin = (controllo: GooseStandardControlType) => {

        try {

            if (!isNaN(formData[controllo.idComponentA])) {
                throw new Error("Il valore è già un numero");
            }

            let dataComponenteA = Date.parse(formData[controllo.idComponentA]);
            console.info(dataComponenteA);

            if (isNaN(dataComponenteA)) {
                throw new Error("dataComponenteA non è una data valida");
            }

            let dataReferenceValue = Date.parse(controllo.referenceValue);
            console.info(dataReferenceValue);

            if (isNaN(dataReferenceValue)) {
                throw new Error("dataReferenceValue non è una data valida");
            }

            if (dataComponenteA < dataReferenceValue) {
                if (formError[controllo.idComponentA] != undefined) {
                    if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                        formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
                } else {
                    formError[controllo.idComponentA] = controllo.errorMessage;
                }
            } else {
                if (formError[controllo.idComponentA] == controllo.errorMessage) {
                    formError[controllo.idComponentA] = undefined;
                } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                    formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
                }
            }


        } catch (error: any) {
            console.error(error);

            if (formData[controllo.idComponentA] == undefined || parseInt(formData[controllo.idComponentA]) < parseInt(controllo.referenceValue)) {
                if (formError[controllo.idComponentA] != undefined) {
                    if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                        formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
                } else {
                    formError[controllo.idComponentA] = controllo.errorMessage;
                }
            } else {
                if (formError[controllo.idComponentA] == controllo.errorMessage) {
                    formError[controllo.idComponentA] = undefined;
                } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                    formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
                }
            }
        }


    }

    const verificaStandardMax = (controllo: GooseStandardControlType) => {

        try {

            if (!isNaN(formData[controllo.idComponentA])) {
                throw new Error("Il valore è già un numero");
            }

            let dataComponenteA = Date.parse(formData[controllo.idComponentA]);
            console.info(dataComponenteA);

            if (isNaN(dataComponenteA)) {
                throw new Error("dataComponenteA non è una data valida");
            }

            let dataReferenceValue = Date.parse(controllo.referenceValue);
            console.info(dataReferenceValue);

            if (isNaN(dataReferenceValue)) {
                throw new Error("dataReferenceValue non è una data valida");
            }

            if (dataComponenteA > dataReferenceValue) {
                if (formError[controllo.idComponentA] != undefined) {
                    if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                        formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
                } else {
                    formError[controllo.idComponentA] = controllo.errorMessage;
                }
            } else {
                if (formError[controllo.idComponentA] == controllo.errorMessage) {
                    formError[controllo.idComponentA] = undefined;
                } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                    formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
                }
            }

        } catch (error: any) {

            console.error(error);

            if (formData[controllo.idComponentA] == undefined || parseInt(formData[controllo.idComponentA]) > parseInt(controllo.referenceValue)) {
                if (formError[controllo.idComponentA] != undefined) {
                    if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                        formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
                } else {
                    formError[controllo.idComponentA] = controllo.errorMessage;
                }
            } else {
                if (formError[controllo.idComponentA] == controllo.errorMessage) {
                    formError[controllo.idComponentA] = undefined;
                } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                    formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
                }
            }
        }



    }


    const gestisciControlloStandard = (controllo: GooseStandardControlType) => {
        if ("REQUIRED" == controllo.type) {
            verificaStandardRequired(controllo);
        } else if ("EQUAL" == controllo.type) {
            verificaStandardEqual(controllo);
        } else if ("NOT_EQUAL" == controllo.type) {
            verificaStandardNotEqual(controllo);
        } else if ("PATTERN" == controllo.type) {
            verificaStandardPattern(controllo);
        } else if ("IN" == controllo.type) {
            verificaStandardIn(controllo);
        } else if ("NOT_IN" == controllo.type) {
            verificaStandardNotIn(controllo);
        } else if ("MIN_TEXT" == controllo.type) {
            verificaStandardMinText(controllo);
        } else if ("MAX_TEXT" == controllo.type) {
            verificaStandardMaxText(controllo);
        } else if ("MIN" == controllo.type) {
            verificaStandardMin(controllo);
        } else if ("MAX" == controllo.type) {
            verificaStandardMax(controllo);
        }
    }

    const verificaComplexEqual = (controllo: GooseComplexControlType) => {
        if (formData[controllo.idComponentA] != formData[controllo.idComponentB]) {
            if (formError[controllo.idComponentA] != undefined) {
                if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                    formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
            } else {
                formError[controllo.idComponentA] = controllo.errorMessage;
            }
        } else {
            if (formError[controllo.idComponentA] == controllo.errorMessage) {
                formError[controllo.idComponentA] = undefined;
            } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
            }
        }
    }

    const verificaComplexNotEqual = (controllo: GooseComplexControlType) => {
        if (formData[controllo.idComponentA] == formData[controllo.idComponentB]) {
            if (formError[controllo.idComponentA] != undefined) {
                if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                    formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
            } else {
                formError[controllo.idComponentA] = controllo.errorMessage;
            }
        } else {
            if (formError[controllo.idComponentA] == controllo.errorMessage) {
                formError[controllo.idComponentA] = undefined;
            } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
            }
        }
    }

    const verificaComplexMin = (controllo: GooseComplexControlType) => {

        try {

            if (!isNaN(formData[controllo.idComponentA])) {
                throw new Error("Il valore è già un numero");
            }

            let dataComponenteA = Date.parse(formData[controllo.idComponentA]);
            console.info(dataComponenteA);

            if (isNaN(dataComponenteA)) {
                throw new Error("dataComponenteA non è una data valida");
            }

            let dataComponenteB = Date.parse(formData[controllo.idComponentB]);
            console.info(dataComponenteB);

            if (isNaN(dataComponenteB)) {
                throw new Error("dataComponenteB non è una data valida");
            }

            if (dataComponenteA < dataComponenteB) {
                if (formError[controllo.idComponentA] != undefined) {
                    if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                        formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
                } else {
                    formError[controllo.idComponentA] = controllo.errorMessage;
                }
            } else {
                if (formError[controllo.idComponentA] == controllo.errorMessage) {
                    formError[controllo.idComponentA] = undefined;
                } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                    formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
                }
            }

        } catch (error: any) {
            console.error(error);

            if (formData[controllo.idComponentA] == undefined || parseInt(formData[controllo.idComponentA]) < parseInt(formData[controllo.idComponentB])) {
                if (formError[controllo.idComponentA] != undefined) {
                    if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                        formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
                } else {
                    formError[controllo.idComponentA] = controllo.errorMessage;
                }
            } else {
                if (formError[controllo.idComponentA] == controllo.errorMessage) {
                    formError[controllo.idComponentA] = undefined;
                } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                    formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
                }
            }
        }



    }

    const verificaComplexMax = (controllo: GooseComplexControlType) => {


        try {

            if (!isNaN(formData[controllo.idComponentA])) {
                throw new Error("Il valore è già un numero");
            }

            let dataComponenteA = Date.parse(formData[controllo.idComponentA]);
            console.info(dataComponenteA);

            if (isNaN(dataComponenteA)) {
                throw new Error("dataComponenteA non è una data valida");
            }

            let dataComponenteB = Date.parse(formData[controllo.idComponentB]);
            console.info(dataComponenteB);

            if (isNaN(dataComponenteB)) {
                throw new Error("dataComponenteB non è una data valida");
            }

            if (dataComponenteA > dataComponenteB) {
                if (formError[controllo.idComponentA] != undefined) {
                    if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                        formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
                } else {
                    formError[controllo.idComponentA] = controllo.errorMessage;
                }
            } else {
                if (formError[controllo.idComponentA] == controllo.errorMessage) {
                    formError[controllo.idComponentA] = undefined;
                } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                    formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
                }
            }

        } catch (error: any) {
            console.error(error);

            if (formData[controllo.idComponentA] == undefined || formData[controllo.idComponentA] > formData[controllo.idComponentB]) {
                if (formError[controllo.idComponentA] != undefined) {
                    if (!formError[controllo.idComponentA].includes(controllo.errorMessage))
                        formError[controllo.idComponentA] = formError[controllo.idComponentA] + " | " + controllo.errorMessage;
                } else {
                    formError[controllo.idComponentA] = controllo.errorMessage;
                }
            } else {
                if (formError[controllo.idComponentA] == controllo.errorMessage) {
                    formError[controllo.idComponentA] = undefined;
                } else if (formError[controllo.idComponentA] != undefined && formError[controllo.idComponentA].includes(controllo.errorMessage)) {
                    formError[controllo.idComponentA] = formError[controllo.idComponentA].replace(controllo.errorMessage, "");
                }
            }
        }



    }

    const gestisciControlloComplex = (controllo: GooseComplexControlType) => {
        if ("EQUAL" == controllo.type) {
            verificaComplexEqual(controllo);
        } else if ("NOT_EQUAL" == controllo.type) {
            verificaComplexNotEqual(controllo);
        } else if ("MIN" == controllo.type) {
            verificaComplexMin(controllo);
        } else if ("MAX" == controllo.type) {
            verificaComplexMax(controllo);
        }
    }

    const isControlliPassati = () => {
        form?.controls.map((controllo: GooseControlType) => {
            if ("STANDARD" == controllo.type) {
                let controlloTmp: GooseStandardControlType = controllo.detail as GooseStandardControlType;
                if (formDisabled[controlloTmp.idComponentA] != undefined || formHide[controlloTmp.idComponentA] != undefined) {
                    console.warn("Il controllo STANDARD " + controlloTmp.type + " per il componente " + controlloTmp.idComponentA + " viene saltato perché il componente è disabilitato/nascosto");
                } else {
                    gestisciControlloStandard(controlloTmp)
                }
            } else if ("COMPLEX" == controllo.type) {
                let controlloTmp: GooseComplexControlType = controllo.detail as GooseComplexControlType;
                if (formDisabled[controlloTmp.idComponentA] != undefined || formDisabled[controlloTmp.idComponentB] != undefined || formHide[controlloTmp.idComponentA] != undefined || formHide[controlloTmp.idComponentA] != undefined) {
                    console.warn("Il controllo COMPLEX " + controlloTmp.type + " per i componenti " + controlloTmp.idComponentA + " e " + controlloTmp.idComponentB + " viene saltato perché il componente è disabilitato/nascosto");
                } else {
                    gestisciControlloComplex(controlloTmp)
                }

            }
        })

        let esito: boolean = true;
        Object.keys(formError).map((chiave: string) => {
            form?.components.map((componente: GooseComponentType) => {
                if (chiave == componente.id && formError[chiave] != undefined) {
                    console.error(formError[chiave]);
                    esito = false;
                }
            });
        })
        dispatch(fetchFormError(formError));
        return esito;
    }

    const estraiDatiDaForm = () => {
        let oggetto: any = {};
        Object.keys(formData).map((chiave: string) => {
            if (chiave != "formData" && chiave != "state") {
                if ((formHide[chiave] == undefined || formHide[chiave] == false) && (formDisabled[chiave] == undefined || formDisabled[chiave] == false)) {
                    oggetto[chiave] = formData[chiave];
                } else {
                    console.warn("Il campo " + chiave + " è nascosto o disabilitato e non verrà inviato");
                }
            }

        });
        return oggetto;
    }

    const inviaForm = async () => {

        if (isControlliPassati()) {
            let oggettoDaInviare = JSON.stringify(estraiDatiDaForm());
            if (form.destinationUrl != undefined) {
                form.destinationUrl.body = oggettoDaInviare;
                if (form.destinationUrl.method === "POST") {
                    await gooseFormService.eseguiChiamataPost(form.destinationUrl, oggettoDaInviare)
                        .then((response) => {
                            console.info("Form inviato con successo!");
                            console.info(response.data);
                            dispatch(fetchTestoSuccessAction("Form inviato con successo!"));
                            dispatch(fetchTestoDangerAction(""));
                        })
                        .catch((e: any) => {
                            console.error(e.response);
                            console.error("Errore durante l'invio del form");
                            dispatch(fetchTestoSuccessAction(""));
                            dispatch(fetchTestoDangerAction("Errore durante l'invio del form"));

                        });
                }
            } else {
                console.error("Errore di configurazione: non hai impostato l'endpoint di destinazione (destinationUrl)");
                dispatch(fetchTestoDangerAction("Il destinationUrl non è presente all'interno della configurazione"));
            }

        } else {
            dispatch(fetchTestoSuccessAction(""));
            dispatch(fetchTestoDangerAction("Alcuni controlli non sono stati superati"));
        }
    }

    const verificaHIDE_B_IF_A_EQUAL_X = (render: GooseSimpleRenderConditionalType) => {
        formHide[render.idComponentB] = formData[render.idComponentA] == render.value;
    }

    const verificaDISABLE_B_IF_A_EQUAL_X = (render: GooseSimpleRenderConditionalType) => {
        formDisabled[render.idComponentB] = formData[render.idComponentA] == render.value;
    }

    const verificaHIDE_B_IF_A_NOT_EQUAL_X = (render: GooseSimpleRenderConditionalType) => {
        formHide[render.idComponentB] = formData[render.idComponentA] != render.value;
    }

    const verificaDISABLE_B_IF_A_NOT_EQUAL_X = (render: GooseSimpleRenderConditionalType) => {
        formDisabled[render.idComponentB] = formData[render.idComponentA] != render.value;
    }

    const verificaHIDE_B_IF_A_MIN_X = (render: GooseSimpleRenderConditionalType) => {
        formHide[render.idComponentB] = parseInt(formData[render.idComponentA]) < parseInt(render.value);
    }

    const verificaDISABLE_B_IF_A_MIN_X = (render: GooseSimpleRenderConditionalType) => {
        formDisabled[render.idComponentB] = parseInt(formData[render.idComponentA]) < parseInt(render.value);
    }

    const verificaHIDE_B_IF_A_MAX_X = (render: GooseSimpleRenderConditionalType) => {
        formHide[render.idComponentB] = parseInt(formData[render.idComponentA]) > parseInt(render.value);
    }

    const verificaDISABLE_B_IF_A_MAX_X = (render: GooseSimpleRenderConditionalType) => {
        formDisabled[render.idComponentB] = parseInt(formData[render.idComponentA]) > parseInt(render.value);
    }

    const gestisciRenderSimple = (render: GooseSimpleRenderConditionalType) => {
        if ("HIDE_B_IF_A_EQUAL_X" == render.type) {
            verificaHIDE_B_IF_A_EQUAL_X(render);
        } else if ("DISABLE_B_IF_A_EQUAL_X" == render.type) {
            verificaDISABLE_B_IF_A_EQUAL_X(render);
        } else if ("HIDE_B_IF_A_NOT_EQUAL_X" == render.type) {
            verificaHIDE_B_IF_A_NOT_EQUAL_X(render);
        } else if ("DISABLE_B_IF_A_NOT_EQUAL_X" == render.type) {
            verificaDISABLE_B_IF_A_NOT_EQUAL_X(render);
        } else if ("HIDE_B_IF_A_MIN_X" == render.type) {
            verificaHIDE_B_IF_A_MIN_X(render);
        } else if ("DISABLE_B_IF_A_MIN_X" == render.type) {
            verificaDISABLE_B_IF_A_MIN_X(render);
        } else if ("HIDE_B_IF_A_MAX_X" == render.type) {
            verificaHIDE_B_IF_A_MAX_X(render);
        } else if ("DISABLE_B_IF_A_MAX_X" == render.type) {
            verificaDISABLE_B_IF_A_MAX_X(render);
        }
    }

    const verificaHIDE_C_IF_A_EQUAL_B = (render: GooseComplexRenderConditionalType) => {
        formHide[render.idComponentC] = formData[render.idComponentA] == formData[render.idComponentB];
    }

    const verificaDISABLE_C_IF_A_EQUAL_B = (render: GooseComplexRenderConditionalType) => {
        formDisabled[render.idComponentC] = formData[render.idComponentA] == formData[render.idComponentB];
    }

    const verificaHIDE_C_IF_A_NOT_EQUAL_B = (render: GooseComplexRenderConditionalType) => {
        formHide[render.idComponentC] = formData[render.idComponentA] != formData[render.idComponentB];
    }

    const verificaDISABLE_C_IF_A_NOT_EQUAL_B = (render: GooseComplexRenderConditionalType) => {
        formDisabled[render.idComponentC] = formData[render.idComponentA] != formData[render.idComponentB];
    }

    const verificaHIDE_C_IF_A_MIN_B = (render: GooseComplexRenderConditionalType) => {
        formHide[render.idComponentC] = parseInt(formData[render.idComponentA]) < parseInt(formData[render.idComponentB]);
    }

    const verificaDISABLE_C_IF_A_MIN_B = (render: GooseComplexRenderConditionalType) => {
        formDisabled[render.idComponentC] = parseInt(formData[render.idComponentA]) < parseInt(formData[render.idComponentB]);
    }

    const verificaHIDE_C_IF_A_MAX_B = (render: GooseComplexRenderConditionalType) => {
        formHide[render.idComponentC] = parseInt(formData[render.idComponentA]) > parseInt(formData[render.idComponentB]);
    }

    const verificaDISABLE_C_IF_A_MAX_B = (render: GooseComplexRenderConditionalType) => {
        formDisabled[render.idComponentC] = parseInt(formData[render.idComponentA]) > parseInt(formData[render.idComponentB]);
    }

    const gestisciRenderComplex = (render: GooseComplexRenderConditionalType) => {
        if ("HIDE_C_IF_A_EQUAL_B" == render.type) {
            verificaHIDE_C_IF_A_EQUAL_B(render);
        } else if ("DISABLE_C_IF_A_EQUAL_B" == render.type) {
            verificaDISABLE_C_IF_A_EQUAL_B(render);
        } else if ("HIDE_C_IF_A_NOT_EQUAL_B" == render.type) {
            verificaHIDE_C_IF_A_NOT_EQUAL_B(render);
        } else if ("DISABLE_C_IF_A_NOT_EQUAL_B" == render.type) {
            verificaDISABLE_C_IF_A_NOT_EQUAL_B(render);
        } else if ("HIDE_C_IF_A_MIN_B" == render.type) {
            verificaHIDE_C_IF_A_MIN_B(render);
        } else if ("DISABLE_C_IF_A_MIN_B" == render.type) {
            verificaDISABLE_C_IF_A_MIN_B(render);
        } else if ("HIDE_C_IF_A_MAX_B" == render.type) {
            verificaHIDE_C_IF_A_MAX_B(render);
        } else if ("DISABLE_C_IF_A_MAX_B" == render.type) {
            verificaDISABLE_C_IF_A_MAX_B(render);
        }
    }


    const checkRenderConditional = () => {
        if (Array.isArray(form?.renders)) {
            form?.renders.map((render: GooseRenderType) => {
                if ("SIMPLE_RENDER" == render.type) {
                    gestisciRenderSimple(render.detail as GooseSimpleRenderConditionalType)
                } else if ("COMPLEX_RENDER" == render.type) {
                    gestisciRenderComplex(render.detail as GooseComplexRenderConditionalType)
                }
            })
            dispatch(fetchFormHide(formHide));
            dispatch(fetchFormDisabled(formDisabled));
        }
    }


    function demo() {
        console.log("Avvio della baracca in corso...")
        return Promise.resolve("Success");

    }

    const componentiConDatiDinamici = [
        "GOOSE_SELECT", "GOOSE_LINKED_SELECT", "GOOSE_DATA_LIST", "GOOSE_RADIO"
    ]

    useEffect(() => {

        if (isPrimoCaricamento && formTmp != undefined) {
            setPrimoCaricamento(false);

            demo().then(
                (onResolved) => {
                    console.info("INIZIO CHIAMATE DINAMICHE");

                },
                (onRejected) => {
                    console.info("ERRORE STRAZIANTE");
                }
            ).then(
                async () => {

                    for (let c = 0; c < formTmp.components.length; c++) {
                        let componenteTmp = formTmp.components[c];

                        if (componentiConDatiDinamici.includes(componenteTmp.type)) {
                            let settingsTmp: any = componenteTmp.setting;
                            if (settingsTmp.dynamicValues != undefined) {


                                let chiamataHttpTmp: GooseHttpRequest = settingsTmp.dynamicValues;

                                if (chiamataHttpTmp.method === "GET") {
                                    await gooseFormService.eseguiChiamataGet(chiamataHttpTmp)
                                        .then((response) => {
                                            formTmp.components[c].setting.values = response.data;
                                        })
                                        .catch((e: any) => {
                                            console.error(e.response);
                                            console.error("Errore recupero dati dinamici per il componente " + componenteTmp.id)
                                        });
                                }

                            }
                        }
                    }


                }
            ).then(
                () => {
                    setForm(formTmp);
                    console.info(formTmp);
                    console.info("FINE CHIAMATE DINAMICHE")
                }
            )







        }

        checkRenderConditional();

        if (!eseguitaChiamataRecuperoDati && form?.originUrl != undefined) {
            setEseguitaChiamataRecuperoDati(true);
            GooseHttpRequestUtil(form?.originUrl)?.then(response => {
                let dati = JSON.parse(response);
                Object.keys(dati).map((chiave: string) => {
                    formData[chiave] = dati[chiave];
                })
                dispatch(fetchFormData(formData));
            }).catch(e => {
                console.error(e);
            });
        }

        if (!resettato) {
            setResettato(true);
            resetForm();
            setEseguitaChiamataRecuperoDati(false);
        }
    }, [formData]);


    /*
        PER RESETTARE IL FORM: 
        document.getElementById('resetFormButton').click();

        PER LANCIARE I CONTROLLI:
        document.getElementById('eseguiControlliButton').click();

        PER INVIARE IL FORM:
        document.getElementById('inviaFormButton').click();

    */

    return (<>
        <button className='d-none' id='resetFormButton' onClick={resetForm} ></button>
        <button className='d-none' id='eseguiControlliButton' onClick={isControlliPassati} ></button>
        <button className='d-none' id='inviaFormButton' onClick={inviaForm} ></button>

        {form != undefined &&
            <form autoComplete={form.autocomplete ? "on" : "off"}><div id={form.formId != undefined ? form.formId : ""} className="card shadow mb-4">
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <span><h6 className="m-0 font-weight-bold text-primary"><i className={"pr-2 " + form.icon}></i>{form.title}</h6>
                        <small>{form.description}</small>
                    </span>
                    <GoosePopup input={form.popup} id={form.formId} />
                </div>
                <div className="card-body">
                    <div className='row'>
                        {Array.isArray(form.components) && form.components.map((componente: GooseComponentType) =>
                            <GooseComponent key={componente.id} input={componente} />
                        )}
                    </div>
                    <div className='row pt-3'>
                        <div className='col-6 text-right'>
                            {form.resetButton != undefined && <span onClick={resetForm} className='btn btn-outline-primary'><i className={form.resetButton != undefined ? form.resetButton.icon + " pr-2" : ""}></i>{form.resetButton != undefined ? form.resetButton.title : ""}</span>}
                        </div>
                        <div className='col-6 text-left'>
                            {form.sendButton != undefined && <span onClick={inviaForm} className='btn btn-primary'><i className={form.sendButton != undefined ? form.sendButton.icon + " pr-2" : ""}></i>{form.sendButton != undefined ? form.sendButton.title : ""}</span>}
                        </div>
                    </div>

                </div>
            </div></form>
        }
    </>);


}


