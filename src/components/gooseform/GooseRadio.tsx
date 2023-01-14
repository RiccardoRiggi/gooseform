import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../../modules/formData/actions';
import { fetchFormError } from '../../modules/formError/actions';
import { fetchFormList } from '../../modules/formList/actions';
import { GooseKeyValue } from '../../type/GooseKeyValue';
import { GooseRadioType } from '../../type/GooseRadioType';
import GooseHttpRequestUtil from '../../util/GooseHttpRequestUtil';

export default function GooseRadio(inp: any) {

    let formData = useSelector((state: any) => state.formData);
    let formError = useSelector((state: any) => state.formError);
    let formDisabled = useSelector((state: any) => state.formDisabled);
    let formList = useSelector((state: any) => state.formList);


    let dispatch = useDispatch();


    let config: GooseRadioType = inp.input;
    let id: string = inp.id;

    const [eseguitaChiamata, setEseguitaChiamata] = React.useState(false);

    if (formList[id] == undefined && config.dynamicValues == null) {
        formList[id] = config.values;
        dispatch(fetchFormList(formList));
    }

    const aggiornaStato = (event: any) => {
        formData[id] = event.target.value;
        dispatch(fetchFormData(formData));
        formError[id]=undefined;
        dispatch(fetchFormError(formError));
    };

    if (config.dynamicValues != null && !eseguitaChiamata) {
        setEseguitaChiamata(true);
        GooseHttpRequestUtil(config.dynamicValues)?.then(response => {
            let risposta = JSON.parse(response);
            console.log(risposta);
            let listaProvvisoria: Array<GooseKeyValue> = []
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
            formList[id]=listaProvvisoria;
            dispatch(fetchFormList(formList));
        }).catch(e => {
            console.error(e);
        });
    }

    return (<>
        {Array.isArray(formList[id]) && formList[id].map((val: GooseKeyValue) =>
            <div className="form-check form-check-inline">
                <input checked={formData[id] == val.key} id={id+""+val.key} onChange={aggiornaStato} className="form-check-input" type="radio" name={config.name} value={val.key} disabled={config.disabled || formDisabled[id]} />
                <label htmlFor={id+""+val.key} className="form-check-label">{val.value}</label>
            </div>
        )}
    </>);


}