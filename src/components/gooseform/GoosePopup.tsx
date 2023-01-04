import React from 'react';
import { GoosePopupType } from '../../type/GoosePopupType';

export default function GoosePopup(inp: any) {

    let popup: GoosePopupType = inp.input;
    let id: string = inp.id;

    return (<>
        <span data-toggle="modal" data-target={"#" + id + "Modal"}>
            <i title={popup != undefined && popup.textTooltip != undefined ? popup.textTooltip : ""} className={" " + (popup != undefined && popup.icon != undefined ? popup.icon : "")} ></i>
        </span>

        <div className="modal fade" id={id + "Modal"} role="dialog" aria-labelledby={id + "ModalLabel"} aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={id + "eModalLabel"}>{popup != undefined && popup.title != undefined ? popup.title : ""}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {popup != undefined && popup.description != undefined ? popup.description : ""}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Chiudi</button>
                    </div>
                </div>
            </div>
        </div>
    </>);


}