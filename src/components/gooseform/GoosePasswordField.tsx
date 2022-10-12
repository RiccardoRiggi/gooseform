import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../../modules/formData/actions';

import { GoosePasswordFieldType } from '../../type/GoosePasswordFieldType';


export default function GoosePasswordField(inp: any) {

    let formData = useSelector((state: any) => state.formData);

    let dispatch = useDispatch();

    let config: GoosePasswordFieldType = inp.input;
    let id: string = inp.id;


    const aggiornaStato = (event: any) => {
        formData[id]=event.target.value;
        dispatch(fetchFormData(formData));
    };

    return (<>
        <input type={"password"} onChange={aggiornaStato} className='form-control' id={id} name={config.name} placeholder={config.placeholder} disabled={config.disabled} readOnly={config.readonly} autoFocus={config.autofocus} value={formData[id]} />
    </>);


}