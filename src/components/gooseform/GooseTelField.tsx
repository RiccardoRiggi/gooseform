import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHref } from 'react-router-dom';
import { fetchFormData } from '../../modules/formData/actions';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseDataListType } from '../../type/GooseDataListType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseKeyValue } from '../../type/GooseKeyValue';
import { GooseNestType } from '../../type/GooseNestType';
import { GooseTelFieldType } from '../../type/GooseTelFieldType';
import { GooseTextAreaType } from '../../type/GooseTextAreaType';
import { GooseTextFieldType } from '../../type/GooseTextFieldType';
import { GooseTooltipType } from '../../type/GooseTooltipType';
import GooseHttpRequestUtil from '../../util/GooseHttpRequestUtil';

export default function GooseTelField(inp: any) {

    let config: GooseTelFieldType = inp.input;
    let id: string = inp.id;

    let formData = useSelector((state: any) => state.formData);
    let dispatch = useDispatch();

    const aggiornaStato = (event: any) => {
        formData[id] = event.target.value;
        dispatch(fetchFormData(formData));
    };

    return (<>
        <input type={"tel"} onChange={aggiornaStato} className='form-control' id={id} name={config.name} placeholder={config.placeholder} disabled={config.disabled} readOnly={config.readonly} autoFocus={config.autofocus} value={formData[id]} />
    </>);


}