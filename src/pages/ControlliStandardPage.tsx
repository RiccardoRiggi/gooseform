import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import GooseForm from '../components/gooseform/GooseForm';
import Layout from '../components/Layout';
import { fetchIsLoadingAction } from '../modules/feedback/actions';
import { fetchFormData } from '../modules/formData/actions';
import { fetchFormError, resetFormError } from '../modules/formError/actions';
import gooseFormService from '../services/GooseFormService';
import { GooseFormType } from '../type/GooseFormType';
import { GooseNestType } from '../type/GooseNestType';

export default function ControlliStandardPpage() {

    let params = useParams();
    let dispatch = useDispatch();

    const [path, setPath] = React.useState("")
    const [gooseForm, setGooseForm] = React.useState<GooseFormType>();


    const ricerca = async (nomeComponente: any) => {

        await gooseFormService.getSingleStandardControl(nomeComponente).then(response => {
            setGooseForm(response.data);

            dispatch(fetchIsLoadingAction(false));
        }).catch(e => {
            console.error(e);
            setGooseForm(undefined);
            dispatch(fetchIsLoadingAction(false));
        });

    }

 

    useEffect(() => {

        if (params.id != path) {
            dispatch(fetchIsLoadingAction(true));
            setPath(params.id != null ? params.id : "");
            ricerca(params.id);
        }
    });


    return (
        <Layout>
            <div className='row'>
                <div className='col-12'>
                    <GooseForm form={gooseForm} />
                </div>
            </div>
        </Layout>
    );

}