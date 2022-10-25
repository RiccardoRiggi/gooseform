import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../../modules/formData/actions';
import { fetchFormError } from '../../modules/formError/actions';
import { GooseHttpRequest } from '../../type/GooseHttpRequest';
import { GooseKeyValue } from '../../type/GooseKeyValue';
import { GooseLinkedSelectType } from '../../type/GooseLinkedSelectType';
import GooseHttpRequestUtil from '../../util/GooseHttpRequestUtil';

export default function GooseLinkedSelect(inp: any) {

    let config: GooseLinkedSelectType = inp.input;
    let id: string = inp.id;

    const [eseguitaChiamata, setEseguitaChiamata] = React.useState(false);

    const [listaValori, setListaValori] = React.useState<GooseKeyValue[]>(config.values);

    let formData = useSelector((state: any) => state.formData);
    let formError = useSelector((state: any) => state.formError);
    let formDisabled = useSelector((state: any) => state.formDisabled);



    let dispatch = useDispatch();

    const aggiornaStato = (event: any) => {
        formData[id] = event.target.value;
        dispatch(fetchFormData(formData));
        formError[id]=undefined;
        dispatch(fetchFormError(formError));
    };

    const aggiornaValoriDopoInputPadre = () => {
        setEseguitaChiamata(true);
        let newDynamicValues: GooseHttpRequest = Object.assign({}, config.dynamicValues);

        newDynamicValues.url = newDynamicValues.url + "/" + formData[config.idLinkedSelectPadre];
        GooseHttpRequestUtil(newDynamicValues)?.then(response => {
            let risposta = JSON.parse(response);
            console.log(risposta);
            let listaProvvisoria: Array<GooseKeyValue> = []
            listaProvvisoria.push({ key: "", value: "Scegli..." });
            {
                risposta.map((riga: any) => {
                    let oggettoRispostaTpm: GooseKeyValue = { key: "", value: "" };
                    oggettoRispostaTpm.key = riga[config.keyName];
                    oggettoRispostaTpm.value = riga[config.valueName];
                    if (oggettoRispostaTpm.key != undefined && oggettoRispostaTpm.key != "")
                        listaProvvisoria.push(oggettoRispostaTpm);
                }
                )
            }
            setListaValori(listaProvvisoria);
            formData[id] = "";
            dispatch(fetchFormData(formData));
        }).catch(e => {
            console.error(e);
        });
    }


    const aggiornaValori = () => {
        setEseguitaChiamata(true);
        GooseHttpRequestUtil(config.dynamicValues)?.then(response => {
            let risposta = JSON.parse(response);
            console.log(risposta);
            let listaProvvisoria: Array<GooseKeyValue> = []
            listaProvvisoria.push({ key: "", value: "Scegli..." });
            {
                risposta.map((riga: any) => {
                    let oggettoRispostaTpm: GooseKeyValue = { key: "", value: "" };
                    oggettoRispostaTpm.key = riga[config.keyName];
                    oggettoRispostaTpm.value = riga[config.valueName];
                    if (oggettoRispostaTpm.key != undefined)
                        listaProvvisoria.push(oggettoRispostaTpm);
                }
                )
            }
            setListaValori(listaProvvisoria);
        }).catch(e => {
            console.error(e);
        });
    }

    const handleOnChange = (event: any) => {
        aggiornaStato(event);

        let selectFiglia: any = document.getElementById(config.idLinkedSelectFiglia);


        var event: any = new MouseEvent('dblclick', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        selectFiglia.dispatchEvent(event);




    }

    if (config.dynamicValues != null && !eseguitaChiamata) {
        aggiornaValori();
    }

    return (<>
        <select disabled={formDisabled[id]} className={formError[id]!=undefined?"form-control is-invalid":"form-control"} id={id} size={config.size} onDoubleClick={() => aggiornaValoriDopoInputPadre()} onChange={handleOnChange} value={formData[id]!=undefined?formData[id]:""}>
            {Array.isArray(listaValori) && listaValori.map((val: GooseKeyValue) =>
                <option value={val.key} >{val.value}</option>
            )}
        </select>
    </>);


}