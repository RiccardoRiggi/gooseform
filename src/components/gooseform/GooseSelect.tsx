import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../../modules/formData/actions';
import { fetchFormError } from '../../modules/formError/actions';
import { fetchFormList } from '../../modules/formList/actions';
import { GooseKeyValue } from '../../type/GooseKeyValue';
import { GooseSelectType } from '../../type/GooseSelectType';
import GooseHttpRequestUtil from '../../util/GooseHttpRequestUtil';

export default function GooseSelect(inp: any) {

    let formData = useSelector((state: any) => state.formData);
    let formError = useSelector((state: any) => state.formError);
    let formDisabled = useSelector((state: any) => state.formDisabled);
    let formList = useSelector((state: any) => state.formList);


    let dispatch = useDispatch();

    let config: GooseSelectType = inp.input;
    let id: string = inp.id;


    if (formList[id] == undefined) {
        formList[id] = config.values;
        dispatch(fetchFormList(formList));
    }



    const aggiornaStato = (event: any) => {
        formData[id] = event.target.value;
        dispatch(fetchFormData(formData));
        formError[id] = undefined;
        dispatch(fetchFormError(formError));
    };


    return (<>
        <select disabled={formDisabled[id]} className={formError[id] != undefined ? "form-control is-invalid" : "form-control"} id={id} size={config.size} onChange={aggiornaStato} value={formData[id] != undefined ? formData[id] : ""}>
            <option value={""}>Scegli...</option>
            {Array.isArray(formList[id]) && formList[id].map((val: GooseKeyValue) =>
                <option value={val.key} >{val.value}</option>
            )}
        </select>
    </>);


}