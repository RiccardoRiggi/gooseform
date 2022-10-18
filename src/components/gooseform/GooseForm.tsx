import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData, resetFormData } from '../../modules/formData/actions';
import { fetchFormError, resetFormError } from '../../modules/formError/actions';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseControlType } from '../../type/GooseControlType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseNestType } from '../../type/GooseNestType';
import { GooseStandardControlType } from '../../type/GooseStandardControlType';
import GooseComponent from './GooseComponent';
import GoosePopup from './GoosePopup';

export default function GooseForm(input: GooseNestType) {

    let formError = useSelector((state: any) => state.formError);
    let formData = useSelector((state: any) => state.formData);


    let form: GooseFormType | undefined = input.form;


    let dispatch = useDispatch();


    const [resettato, setResettato] = React.useState(false);

    const resetForm = () => {
        dispatch(resetFormData());
        dispatch(resetFormError());
    }

    const verificaRequired = (controllo: GooseStandardControlType) => {
        if(formData[controllo.idComponentA]==undefined){
            formError[controllo.idComponentA]=controllo.errorMessage;
        }
    }

    const verificaEqual = (controllo: GooseStandardControlType) => {
        if(formData[controllo.idComponentA]!=controllo.referenceValue){
            if(formError[controllo.idComponentA]!=undefined){
                formError[controllo.idComponentA]=formError[controllo.idComponentA]+" | "+controllo.errorMessage;
            }else{
                formError[controllo.idComponentA]=controllo.errorMessage;
            }
        }
    }

    const verificaNotEqual = (controllo: GooseStandardControlType) => {
        if(formData[controllo.idComponentA]==controllo.referenceValue){
            if(formError[controllo.idComponentA]!=undefined){
                formError[controllo.idComponentA]=formError[controllo.idComponentA]+" | "+controllo.errorMessage;
            }else{
                formError[controllo.idComponentA]=controllo.errorMessage;
            }
        }
    }

    const verificaPattern = (controllo: GooseStandardControlType) => {
        const regex = new RegExp(controllo.referenceValue);

        if(!regex.test(formData[controllo.idComponentA])){
            if(formError[controllo.idComponentA]!=undefined){
                formError[controllo.idComponentA]=formError[controllo.idComponentA]+" | "+controllo.errorMessage;
            }else{
                formError[controllo.idComponentA]=controllo.errorMessage;
            }
        }
    }

    const gestisciControlloStandard = (controllo: GooseStandardControlType) => {
        if ("REQUIRED" == controllo.type) {
            verificaRequired(controllo);
        }else if ("EQUAL" == controllo.type) {
            verificaEqual(controllo);
        }else if ("NOT_EQUAL" == controllo.type) {
            verificaNotEqual(controllo);
        }else if ("PATTERN" == controllo.type) {
            verificaPattern(controllo);
        }
    }

    const isControlliPassati = () => {
        form?.controls.map((controllo: GooseControlType) => {
            if ("STANDARD" == controllo.type) {
                gestisciControlloStandard(controllo.detail as GooseStandardControlType)
            } else if ("COMPLEX" == controllo.type) {

            }
        })
        dispatch(fetchFormError(formError));
        return true; //DA FARE UN CONTROLLO SUL NUMERO DI KEY DI FORMS ERROR
    }

    const inviaForm = () => {
        if (isControlliPassati()) {

        } else {

        }
    }


    useEffect(() => {
        if (!resettato) {
            setResettato(true);
            resetForm();
        }
    });




    return (<>
        {form != undefined &&
            <form autoComplete={form.autocomplete ? "on" : "off"}><div id={form.formId != undefined ? form.formId : ""} className="card shadow mb-4">
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary"><i className={"pr-2 " + form.icon}></i>{form.title}</h6>
                    <GoosePopup input={form.popup} id={form.formId} />
                </div>
                <div className="card-body">
                    <div className='row'>
                        {form.components.map((componente: GooseComponentType) =>
                            <GooseComponent input={componente} />
                        )}
                        <div className='col-6 text-right'>
                            <span onClick={resetForm} className='btn btn-outline-primary'><i className={form.resetButton.icon + " pr-2"}></i>{form.resetButton.title}</span>
                        </div>
                        <div className='col-6 text-left'>
                            <span onClick={inviaForm} className='btn btn-primary'><i className={form.sendButton.icon + " pr-2"}></i>{form.sendButton.title}</span>
                        </div>
                    </div>

                </div>
            </div></form>
        }
    </>);


}


