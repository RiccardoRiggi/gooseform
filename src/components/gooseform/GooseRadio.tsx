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
        {Array.isArray(formList[id]) && formList[id].map((val: GooseKeyValue) =>
            <div className="form-check form-check-inline">
                <input checked={formData[id] == val.key} id={id + "" + val.key} onChange={aggiornaStato} className="form-check-input" type="radio" name={config.name} value={val.key} disabled={config.disabled || formDisabled[id]} />
                <label htmlFor={id + "" + val.key} className="form-check-label">{val.value}</label>
            </div>
        )}
    </>);


}