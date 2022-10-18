import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHref } from 'react-router-dom';
import { fetchFormData } from '../../modules/formData/actions';
import { fetchFormError } from '../../modules/formError/actions';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseDataListType } from '../../type/GooseDataListType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseKeyValue } from '../../type/GooseKeyValue';
import { GooseNestType } from '../../type/GooseNestType';
import { GooseNumberFieldType } from '../../type/GooseNumberFieldType';
import { GooseTextAreaType } from '../../type/GooseTextAreaType';
import { GooseTextFieldType } from '../../type/GooseTextFieldType';
import { GooseTooltipType } from '../../type/GooseTooltipType';
import GooseHttpRequestUtil from '../../util/GooseHttpRequestUtil';

export default function GooseNumberField(inp: any) {

    let formData = useSelector((state: any) => state.formData);
    let formError = useSelector((state: any) => state.formError);


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
        <input type={"number"} step={config.steps} onChange={aggiornaStato} className='form-control' id={id} name={config.name} placeholder={config.placeholder} disabled={config.disabled} readOnly={config.readonly} autoFocus={config.autofocus} value={formData[id]!=undefined?formData[id]:""} />
    </>);


}