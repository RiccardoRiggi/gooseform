import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHref } from 'react-router-dom';
import { fetchFormData } from '../../modules/formData/actions';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseKeyValue } from '../../type/GooseKeyValue';
import { GooseNestType } from '../../type/GooseNestType';
import { GooseRadioType } from '../../type/GooseRadioType';
import { GooseSelectType } from '../../type/GooseSelectType';
import { GooseTextAreaType } from '../../type/GooseTextAreaType';
import { GooseTooltipType } from '../../type/GooseTooltipType';
import GooseHttpRequestUtil from '../../util/GooseHttpRequestUtil';

export default function GooseRadio(inp: any) {


    /*

    VIA JS PER SELEZIONARE IL VALORE SELEZIONATO

    document.getElementById("gooseSelectStatica").options[document.getElementById("gooseSelectStatica").selectedIndex]

    */

    let formData = useSelector((state: any) => state.formData);
    let dispatch = useDispatch();


    let config: GooseRadioType = inp.input;
    let id: string = inp.id;

    const [eseguitaChiamata, setEseguitaChiamata] = React.useState(false);

    const [listaValori, setListaValori] = React.useState<GooseKeyValue[]>(config.values);

    const aggiornaStato = (event: any) => {
        formData[id] = event.target.value;
        dispatch(fetchFormData(formData));
    };

    if (config.dynamicValues != null && !eseguitaChiamata) {
        setEseguitaChiamata(true);
        GooseHttpRequestUtil(config.dynamicValues)?.then(response => {
            let risposta = JSON.parse(response);
            console.log(risposta);
            let listaProvvisoria: Array<GooseKeyValue> = []
            {
                risposta.map((riga: any) => {
                    console.warn(riga + " - " + config.keyName + " - " + riga[config.keyName]);
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

    return (<>
        {Array.isArray(listaValori) && listaValori.map((val: GooseKeyValue) =>
            <div className="form-check form-check-inline">
                <input checked={formData[id] == val.key} id={val.key} onChange={aggiornaStato} className="form-check-input" type="radio" name={config.name} value={val.key} />
                <label htmlFor={val.key} className="form-check-label">{val.value}</label>
            </div>
        )}
    </>);


}