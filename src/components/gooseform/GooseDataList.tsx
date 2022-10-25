import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../../modules/formData/actions';
import { fetchFormError } from '../../modules/formError/actions';
import { GooseDataListType } from '../../type/GooseDataListType';
import { GooseKeyValue } from '../../type/GooseKeyValue';
import GooseHttpRequestUtil from '../../util/GooseHttpRequestUtil';

export default function GooseDataList(inp: any) {


    let formData = useSelector((state: any) => state.formData);
    let formError = useSelector((state: any) => state.formError);
    let formDisabled = useSelector((state: any) => state.formDisabled);



    let dispatch = useDispatch();

    let config: GooseDataListType = inp.input;
    let id: string = inp.id;

    const [listaValori, setListaValori] = React.useState<GooseKeyValue[]>(config.values);
    const [eseguitaChiamata, setEseguitaChiamata] = React.useState(false);


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
            setListaValori(listaProvvisoria);
        }).catch(e => {
            console.error(e);
        });

    }

    return (<>
        <input onChange={aggiornaStato} className={formError[id]!=undefined?"form-control is-invalid":"form-control"} id={id} list={id + "-list"} name={config.name} placeholder={config.placeholder} disabled={config.disabled || formDisabled[id]} readOnly={config.readonly} autoFocus={config.autofocus} value={formData[id]!=undefined?formData[id]:""} />
        <datalist id={id+"-list"}>
            {Array.isArray(listaValori) && listaValori.map((val: GooseKeyValue) =>
                <option value={val.key} >{val.value}</option>
            )}
        </datalist>

    </>);


}