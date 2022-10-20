import React from 'react';
import { useSelector } from 'react-redux';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseNestType } from '../../type/GooseNestType';
import GooseCheckbox from './GooseCheckbox';
import GooseColorField from './GooseColorField';
import GooseDataList from './GooseDataList';
import GooseDateField from './GooseDateField';
import GooseDateTimeField from './GooseDateTimeField';
import GooseEmailField from './GooseEmailField';
import GooseLinkedSelect from './GooseLinkedSelect';
import GooseMounthField from './GooseMounthField';
import GooseNumberField from './GooseNumberField';
import GoosePasswordField from './GoosePasswordField';
import GoosePopup from './GoosePopup';
import GooseRadio from './GooseRadio';
import GooseRangeField from './GooseRangeField';
import GooseSelect from './GooseSelect';
import GooseTelField from './GooseTelField';
import GooseTextArea from './GooseTextArea';
import GooseTextField from './GooseTextField';
import GooseTimeField from './GooseTimeField';
import GooseTooltip from './GooseTooltip';
import GooseUrlField from './GooseUrlField';
import GooseWeekField from './GooseWeekField';

export default function GooseComponent(inp: any) {

    let formError = useSelector((state: any) => state.formError);

    let formHide = useSelector((state: any) => state.formHide);


    let input: GooseComponentType = inp.input;

    const generaComponente = () => {

        if ("GOOSE_TEXT_AREA" == input.type) {
            return <GooseTextArea input={input.setting} id={input.id} />
        } else if ("GOOSE_SELECT" == input.type) {
            return <GooseSelect input={input.setting} id={input.id} />
        } else if ("GOOSE_LINKED_SELECT" == input.type) {
            return <GooseLinkedSelect input={input.setting} id={input.id} />
        } else if ("GOOSE_DATA_LIST" == input.type) {
            return <GooseDataList input={input.setting} id={input.id} />
        } else if ("GOOSE_TEXT_FIELD" == input.type) {
            return <GooseTextField input={input.setting} id={input.id} />
        } else if ("GOOSE_PASSWORD_FIELD" == input.type) {
            return <GoosePasswordField input={input.setting} id={input.id} />
        } else if ("GOOSE_NUMBER_FIELD" == input.type) {
            return <GooseNumberField input={input.setting} id={input.id} />
        } else if ("GOOSE_RADIO" == input.type) {
            return <GooseRadio input={input.setting} id={input.id} />
        } else if ("GOOSE_CHECKBOX" == input.type) {
            return <GooseCheckbox input={input} />
        } else if ("GOOSE_EMAIL_FIELD" == input.type) {
            return <GooseEmailField input={input.setting} id={input.id} />
        } else if ("GOOSE_DATE_FIELD" == input.type) {
            return <GooseDateField input={input.setting} id={input.id} />
        } else if ("GOOSE_DATE_TIME_FIELD" == input.type) {
            return <GooseDateTimeField input={input.setting} id={input.id} />
        } else if ("GOOSE_MOUNTH_FIELD" == input.type) {
            return <GooseMounthField input={input.setting} id={input.id} />
        } else if ("GOOSE_WEEK_FIELD" == input.type) {
            return <GooseWeekField input={input.setting} id={input.id} />
        } else if ("GOOSE_TIME_FIELD" == input.type) {
            return <GooseTimeField input={input.setting} id={input.id} />
        } else if ("GOOSE_TEL_FIELD" == input.type) {
            return <GooseTelField input={input.setting} id={input.id} />
        } else if ("GOOSE_URL_FIELD" == input.type) {
            return <GooseUrlField input={input.setting} id={input.id} />
        } else if ("GOOSE_COLOR_FIELD" == input.type) {
            return <GooseColorField input={input.setting} id={input.id} />
        } else if ("GOOSE_RANGE_FIELD" == input.type) {
            return <GooseRangeField input={input.setting} id={input.id} />
        }
    }

    const gestisciVisibilita = () => {
        return formHide[input.id] ? "d-none" : "";
    }

    return (
        <div id={input.id != undefined ? input.id + "-container" : ""} className={"pt-3 col-" + input.width + " " + "col-xl-" + input.widthXl + " " + "col-lg-" + input.widthLg + " " + "col-md-" + input.widthMd + " " + "col-sm-" + input.widthSm + " " + gestisciVisibilita()}>
            <div className='d-flex flex-row align-items-center justify-content-between'>
                {"GOOSE_CHECKBOX" != input.type && <><label>{input.label}{input.requiredMark && <strong className='text-danger'>*</strong>}</label>
                    <span>
                        {input.tooltip != null && <GooseTooltip input={input.tooltip} />}
                        {input.popup != null && <GoosePopup input={input.popup} id={input.id} />}
                    </span> </>}
            </div>
            {generaComponente()}
            <small className='text-danger' id={"error-" + input.id}>{formError[input.id]}</small>
        </div>

    );


}