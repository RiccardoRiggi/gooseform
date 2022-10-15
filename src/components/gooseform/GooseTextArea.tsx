import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHref } from 'react-router-dom';
import { fetchFormData } from '../../modules/formData/actions';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseNestType } from '../../type/GooseNestType';
import { GooseTextAreaType } from '../../type/GooseTextAreaType';
import { GooseTooltipType } from '../../type/GooseTooltipType';

export default function GooseTextArea(inp: any) {




    let config: GooseTextAreaType = inp.input;
    let id: string = inp.id;

    let formData = useSelector((state: any) => state.formData);
    let dispatch = useDispatch();

    const aggiornaStato = (event: any) => {
        formData[id] = event.target.value;
        dispatch(fetchFormData(formData));
    };


    return (<>
        <textarea onChange={aggiornaStato} className='form-control' id={id} rows={config.rows} value={formData[id]} />
    </>);


}