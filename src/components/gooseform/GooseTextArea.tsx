import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../../modules/formData/actions';
import { fetchFormError } from '../../modules/formError/actions';
import { GooseTextAreaType } from '../../type/GooseTextAreaType';

export default function GooseTextArea(inp: any) {

    let config: GooseTextAreaType = inp.input;
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
        <textarea disabled={formDisabled[id]} onChange={aggiornaStato} className={formError[id]!=undefined?"form-control is-invalid":"form-control"} id={id} rows={config.rows} value={formData[id]!=undefined?formData[id]:""} />
    </>);


}