import React from 'react';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseNestType } from '../../type/GooseNestType';
import GooseComponent from './GooseComponent';

export default function GooseForm(input: GooseNestType) {

    let form: GooseFormType | undefined = input.form;



    return (<>
        {form != undefined &&
            <form autoComplete={form.autocomplete?"on":"off"}><div id={form.formId != undefined ? form.formId.toString() : ""} className="card shadow mb-4">
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary"><i className={"pr-2 " + form.icon}></i>{form.title}</h6>

                </div>
                <div className="card-body">
                    <div className='row'>
                        {form.components.map((componente: GooseComponentType) =>
                            <span key={componente.id.toString()}><GooseComponent input={componente} /></span>
                        )}
                    </div>

                </div>
            </div></form>
        }
    </>);


}