import React from 'react';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseNestType } from '../../type/GooseNestType';
import GoosePopup from './GoosePopup';
import GooseSelect from './GooseSelect';
import GooseTextArea from './GooseTextArea';
import GooseTooltip from './GooseTooltip';

export default function GooseComponent(inp: any) {

    let input: GooseComponentType = inp.input;

    const generaComponente = () => {

        if("GOOSE_TEXT_AREA"==input.type){
            return <GooseTextArea input={input.setting} id={input.id} valore={"VALORE_STATICO"} />
        }else if("GOOSE_SELECT"==input.type){
            return <GooseSelect input={input.setting} id={input.id} valore={"treStatico"} />
        }

    }

    return (<>
        <div id={input.id!=undefined?input.id.toString()+"-container":""} className={"col-"+input.width+" "+"col-xl-"+input.widthXl+" "+"col-lg-"+input.widthLg+" "+"col-md-"+input.widthMd+" "+"col-sm-"+input.widthSm+" "}>
            <div className='d-flex flex-row align-items-center justify-content-between'>
                <label>{input.label}{input.requiredMark&&<strong className='text-danger'>*</strong>}</label>
                <span>
                    {input.tooltip!=null && <GooseTooltip input={input.tooltip} />}
                    {input.popup!=null && <GoosePopup input={input.popup} id={input.id} />}
                </span>
            </div>
            {generaComponente()}
        </div>
        
    </>);


}