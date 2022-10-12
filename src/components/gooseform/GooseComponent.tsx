import React from 'react';
import { useSelector } from 'react-redux';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseNestType } from '../../type/GooseNestType';
import GooseDataList from './GooseDataList';
import GooseLinkedSelect from './GooseLinkedSelect';
import GooseNumberField from './GooseNumberField';
import GoosePasswordField from './GoosePasswordField';
import GoosePopup from './GoosePopup';
import GooseSelect from './GooseSelect';
import GooseTextArea from './GooseTextArea';
import GooseTextField from './GooseTextField';
import GooseTooltip from './GooseTooltip';

export default function GooseComponent(inp: any) {

    let formError = useSelector((state: any) => state.formError);

    let input: GooseComponentType = inp.input;

    const generaComponente = () => {

        if("GOOSE_TEXT_AREA"==input.type){
            return <GooseTextArea input={input.setting} id={input.id} />
        }else if("GOOSE_SELECT"==input.type){
            return <GooseSelect input={input.setting} id={input.id} />
        }else if("GOOSE_LINKED_SELECT"==input.type){
            return <GooseLinkedSelect input={input.setting} id={input.id} />
        }else if("GOOSE_DATA_LIST"==input.type){
            return <GooseDataList input={input.setting} id={input.id} />
        }else if("GOOSE_TEXT_FIELD"==input.type){
            return <GooseTextField input={input.setting} id={input.id} />
        }else if("GOOSE_PASSWORD_FIELD"==input.type){
            return <GoosePasswordField input={input.setting} id={input.id} />
        }else if("GOOSE_NUMBER_FIELD"==input.type){
            return <GooseNumberField input={input.setting} id={input.id} />
        }

    }

    return (
        <div id={input.id!=undefined?input.id.toString()+"-container":""} className={"col-"+input.width+" "+"col-xl-"+input.widthXl+" "+"col-lg-"+input.widthLg+" "+"col-md-"+input.widthMd+" "+"col-sm-"+input.widthSm+" "}>
            <div className='d-flex flex-row align-items-center justify-content-between'>
                <label>{input.label}{input.requiredMark&&<strong className='text-danger'>*</strong>}</label>
                <span>
                    {input.tooltip!=null && <GooseTooltip input={input.tooltip} />}
                    {input.popup!=null && <GoosePopup input={input.popup} id={input.id} />}
                </span>
            </div>
            {generaComponente()}
            <small className='text-danger' id={"error-"+input.id}>{formError[input.id]}</small>
        </div>
        
    );


}