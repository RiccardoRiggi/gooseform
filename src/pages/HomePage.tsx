import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import gooseFormService from '../services/GooseFormService';

export default function HomePage() {

    const [ricercaEseguita, setRicercaEseguita] = React.useState(false);
    const [gooseForm, setGooseForm] = React.useState(Object);

    const ricerca = async () => {
       
        await gooseFormService.getGooseForm().then(response => {
            setGooseForm(response.data);
        }).catch(e => {
            console.error(e);
        });     

    }

    useEffect(() => {
        if (!ricercaEseguita) {
            setRicercaEseguita(true);
            ricerca();
        }
    });


    return (
        <Layout>
            <div className='row'>
                <div className='col-12'>
                    <h1>QUI VA IL FORM</h1>
                </div>
            </div>
        </Layout>
    );

}