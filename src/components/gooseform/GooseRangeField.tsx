import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHref } from 'react-router-dom';
import { fetchFormData } from '../../modules/formData/actions';
import { fetchFormError } from '../../modules/formError/actions';
import { GooseColorFieldType } from '../../type/GooseColorFieldType';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseDataListType } from '../../type/GooseDataListType';
import { GooseDateFieldType } from '../../type/GooseDateFieldType';
import { GooseDateTimeFieldType } from '../../type/GooseDateTimeFieldType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseKeyValue } from '../../type/GooseKeyValue';
import { GooseNestType } from '../../type/GooseNestType';
import { GooseRangeFieldType } from '../../type/GooseRangeFieldType';
import { GooseTextAreaType } from '../../type/GooseTextAreaType';
import { GooseTextFieldType } from '../../type/GooseTextFieldType';
import { GooseTimeFieldType } from '../../type/GooseTimeFieldType';
import { GooseTooltipType } from '../../type/GooseTooltipType';
import { GooseWeekFieldType } from '../../type/GooseWeekFieldType';
import GooseHttpRequestUtil from '../../util/GooseHttpRequestUtil';

export default function GooseRangeField(inp: any) {

    let config: GooseRangeFieldType = inp.input;
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
        <input type={"range"} onChange={aggiornaStato} className={formError[id]!=undefined?"form-control is-invalid":"form-control"} id={id} name={config.name} disabled={config.disabled} readOnly={config.readonly} value={formData[id]!=undefined?formData[id]:""} min={config.min} max={config.max} step={config.step} />
    </>);


}