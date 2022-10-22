import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../../modules/formData/actions';
import { fetchFormError } from '../../modules/formError/actions';
import { GooseUrlFieldType } from '../../type/GooseUrlFieldType';

export default function GooseUrlField(inp: any) {

    let config: GooseUrlFieldType = inp.input;
    let id: string = inp.id;

    let formData = useSelector((state: any) => state.formData);
    let formError = useSelector((state: any) => state.formError);


    let dispatch = useDispatch();

    const aggiornaStato = (event: any) => {
        formData[id] = event.target.value;
        dispatch(fetchFormData(formData));
        formError[id]=undefined;
        dispatch(fetchFormError(formError));
    };

    return (<>
        <input type={"url"} onChange={aggiornaStato} className={formError[id]!=undefined?"form-control is-invalid":"form-control"} id={id} name={config.name} placeholder={config.placeholder} disabled={config.disabled} readOnly={config.readonly} autoFocus={config.autofocus} value={formData[id]!=undefined?formData[id]:""} />
    </>);


}