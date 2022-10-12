import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData, resetFormData } from '../../modules/formData/actions';
import { fetchFormError, resetFormError } from '../../modules/formError/actions';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseNestType } from '../../type/GooseNestType';
import GooseComponent from './GooseComponent';

export default function GooseForm(input: GooseNestType) {

    let dispatch = useDispatch();


    const [resettato, setResettato] = React.useState(false);

    const resetForm = () => {
        dispatch(resetFormData());
        dispatch(resetFormError());
    }


    useEffect(() => {
        if (!resettato) {
            setResettato(true);
            resetForm();
        }
    });

    let form: GooseFormType | undefined = input.form;



    return (<>
        {form != undefined &&
            <form autoComplete={form.autocomplete ? "on" : "off"}><div id={form.formId != undefined ? form.formId.toString() : ""} className="card shadow mb-4">
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary"><i className={"pr-2 " + form.icon}></i>{form.title}</h6>

                </div>
                <div className="card-body">
                    <div className='row'>
                        {form.components.map((componente: GooseComponentType) =>
                            <GooseComponent input={componente} />
                        )}
                    </div>

                </div>
            </div></form>
        }
    </>);


}