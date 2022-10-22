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

export default function GooseFormDemoPage() {

    let params = useParams();
    let dispatch = useDispatch();

    const [nomeComponente, setNomeComponente] = React.useState("");
    const [tipoGenerale, setTipoGenerale] = React.useState("");
    const [tipoSpecifico, setTipoSpecifico] = React.useState("");

    const [gooseForm, setGooseForm] = React.useState<GooseFormType>();

    const ricerca = async (nomeComponente: any, tipoGenerale: any, tipoSpecifico: any) => {

        await gooseFormService.getFormExample(nomeComponente,tipoGenerale,tipoSpecifico).then(response => {
            setGooseForm(response.data);
            dispatch(fetchIsLoadingAction(false));
        }).catch(e => {
            console.error(e);
            setGooseForm(undefined);
            dispatch(fetchIsLoadingAction(false));
        });

    }

    

    useEffect(() => {

        if (params.nomeComponente != nomeComponente || params.tipoGenerale != tipoGenerale || params.tipoSpecifico != tipoSpecifico) {
            dispatch(fetchIsLoadingAction(true));
            setNomeComponente(params.nomeComponente != null ? params.nomeComponente : "");
            setTipoGenerale(params.tipoGenerale != null ? params.tipoGenerale : "");
            setTipoSpecifico(params.tipoSpecifico != null ? params.tipoSpecifico : "");
            ricerca(params.nomeComponente, params.tipoGenerale, params.tipoSpecifico);
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