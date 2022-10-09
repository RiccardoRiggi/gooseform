import React, { useEffect, useReducer } from 'react';
import { useHref } from 'react-router-dom';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseKeyValue } from '../../type/GooseKeyValue';
import { GooseNestType } from '../../type/GooseNestType';
import { GooseSelectType } from '../../type/GooseSelectType';
import { GooseTextAreaType } from '../../type/GooseTextAreaType';
import { GooseTooltipType } from '../../type/GooseTooltipType';
import GooseHttpRequestUtil from '../../util/GooseHttpRequestUtil';

export default function GooseSelect(inp: any) {


    /*

    VIA JS PER SELEZIONARE IL VALORE SELEZIONATO

    document.getElementById("gooseSelectStatica").options[document.getElementById("gooseSelectStatica").selectedIndex]

    */


    let config: GooseSelectType = inp.input;
    let id: string = inp.id;

    const [eseguitaChiamata,setEseguitaChiamata] = React.useState(false);
    const [valore, setValore] = React.useState(inp.valore);
    const [listaValori, setListaValori] = React.useState<GooseKeyValue[]>(config.values);

    const aggiornaStato = (event: any) => {
        setValore(event.target.value);
    };

    if (config.dynamicValues != null && !eseguitaChiamata) {
        setEseguitaChiamata(true);
        GooseHttpRequestUtil(config.dynamicValues)?.then(response => {
            let risposta = JSON.parse(response);
            console.log(risposta);
            let listaProvvisoria: Array<GooseKeyValue> = []
            {
                risposta.map((riga: any) =>{
                    console.warn(riga + " - "+config.keyName+" - "+riga[config.keyName]);
                    let oggettoRispostaTpm: GooseKeyValue = {key: "", value: ""};
                    oggettoRispostaTpm.key=riga[config.keyName]; 
                    oggettoRispostaTpm.value=riga[config.valueName];
                    if(oggettoRispostaTpm.key!=undefined && oggettoRispostaTpm.key!="") 
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
        <select className="form-control" id={id} size={config.size} onChange={aggiornaStato} value={valore}>
            {Array.isArray(listaValori) && listaValori.map((val: GooseKeyValue) =>
                <option value={val.key} >{val.value}</option>
            )}
        </select>
    </>);


}