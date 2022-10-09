import React from 'react';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseNestType } from '../../type/GooseNestType';
import { GoosePopupType } from '../../type/GoosePopupType';
import { GooseTooltipType } from '../../type/GooseTooltipType';

export default function GoosePopup(inp: any) {

    let popup: GoosePopupType = inp.input;
    let id: string = inp.id;
    
    return (<>
        <span data-toggle="modal" data-target={"#"+id+"Modal"}>
            <i title={popup.textTooltip!=undefined?popup.textTooltip.toString():""} className={" "+popup.icon } ></i>
        </span>

        <div className="modal fade" id={id+"Modal"} role="dialog" aria-labelledby={id+"ModalLabel"} aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={id+"eModalLabel"}>{popup.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {popup.description}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Chiudi</button>
                    </div>
                </div>
            </div>
        </div>
    </>);


}