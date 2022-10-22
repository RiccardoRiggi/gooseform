import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../../modules/formData/actions';
import { fetchFormError } from '../../modules/formError/actions';
import { GooseCheckboxType } from '../../type/GooseCheckboxType';
import { GooseComponentType } from '../../type/GooseComponentType';
import GoosePopup from './GoosePopup';
import GooseTooltip from './GooseTooltip';

export default function GooseCheckbox(inp: any) {



    let input: GooseComponentType = inp.input;
    let config: GooseCheckboxType = input.setting as GooseCheckboxType;
    let id: string = input.id;
    let label: string = input.label;
    let requiredMark: boolean = input.requiredMark;

    let formData = useSelector((state: any) => state.formData);
    let formError = useSelector((state: any) => state.formError);
    let formDisabled = useSelector((state: any) => state.formDisabled);



    let dispatch = useDispatch();

    const aggiornaStato = (event: any) => {
        formData[id] = !formData[id];
        dispatch(fetchFormData(formData));
        formError[id]=undefined;
        dispatch(fetchFormError(formError));
    };

    if(formData[id]==undefined){
        formData[id]=false;
        dispatch(fetchFormData(formData));
        
    }

    return (<>
        <div className="form-check">
            <input onChange={aggiornaStato} type="checkbox" className="form-check-input" id={id} name={config.name} readOnly={config.readonly} disabled={config.disabled || formDisabled[id]} value={id} checked={formData[id]!=undefined?formData[id]:false} />
            <label className="form-check-label" htmlFor={id}>
                {label}{requiredMark && <strong className='text-danger'>*</strong>}
            </label>
            <span>
                {input.tooltip != null && <GooseTooltip input={input.tooltip} />}
                {input.popup != null && <GoosePopup input={input.popup} id={input.id} />}
            </span>
        </div>
    </>);


}