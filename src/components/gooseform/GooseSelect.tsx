import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../../modules/formData/actions';
import { fetchFormError } from '../../modules/formError/actions';
import { GooseKeyValue } from '../../type/GooseKeyValue';
import { GooseSelectType } from '../../type/GooseSelectType';
import GooseHttpRequestUtil from '../../util/GooseHttpRequestUtil';

export default function GooseSelect(inp: any) {

    let formData = useSelector((state: any) => state.formData);
    let formError = useSelector((state: any) => state.formError);
    let formDisabled = useSelector((state: any) => state.formDisabled);

    let dispatch = useDispatch();

    let config: GooseSelectType = inp.input;
    let id: string = inp.id;

    const [eseguitaChiamata, setEseguitaChiamata] = React.useState(false);

    const [listaValori, setListaValori] = React.useState<GooseKeyValue[]>(config.values);

    const aggiornaStato = (event: any) => {
        formData[id] = event.target.value;
        dispatch(fetchFormData(formData));
        formError[id] = undefined;
        dispatch(fetchFormError(formError));
    };

    if (config.dynamicValues != null && !eseguitaChiamata) {
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

    return (<>
        <select disabled={formDisabled[id]} className={formError[id] != undefined ? "form-control is-invalid" : "form-control"} id={id} size={config.size} onChange={aggiornaStato} value={formData[id] != undefined ? formData[id] : ""}>
            <option value={""}>Scegli...</option>
            {Array.isArray(listaValori) && listaValori.map((val: GooseKeyValue) =>
                <option value={val.key} >{val.value}</option>
            )}
        </select>
    </>);


}