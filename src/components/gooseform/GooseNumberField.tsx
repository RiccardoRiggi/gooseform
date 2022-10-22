import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../../modules/formData/actions';
import { fetchFormError } from '../../modules/formError/actions';
import { GooseNumberFieldType } from '../../type/GooseNumberFieldType';

export default function GooseNumberField(inp: any) {

    let formData = useSelector((state: any) => state.formData);
    let formError = useSelector((state: any) => state.formError);
    let formDisabled = useSelector((state: any) => state.formDisabled);


    let dispatch = useDispatch();

    let config: GooseNumberFieldType = inp.input;
    let id: string = inp.id;


    const aggiornaStato = (event: any) => {
        formData[id]=event.target.value;
        dispatch(fetchFormData(formData));
        formError[id]=undefined;
        dispatch(fetchFormError(formError));
    };

    return (<>
        <input type={"number"} step={config.steps} onChange={aggiornaStato} className={formError[id]!=undefined?"form-control is-invalid":"form-control"} id={id} name={config.name} placeholder={config.placeholder} disabled={config.disabled || formDisabled[id]} readOnly={config.readonly} autoFocus={config.autofocus} value={formData[id]!=undefined?formData[id]:""} />
    </>);


}