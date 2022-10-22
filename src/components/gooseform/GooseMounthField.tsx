import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../../modules/formData/actions';
import { fetchFormError } from '../../modules/formError/actions';
import { GooseMounthFieldType } from '../../type/GooseMounthFieldType';

export default function GooseMounthField(inp: any) {

    let config: GooseMounthFieldType = inp.input;
    let id: string = inp.id;

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

    return (<>
        <input type={"month"} onChange={aggiornaStato} className={formError[id]!=undefined?"form-control is-invalid":"form-control"} id={id} name={config.name} disabled={config.disabled || formDisabled[id]} readOnly={config.readonly} value={formData[id]!=undefined?formData[id]:""} />
    </>);


}