import React, { useEffect, useReducer } from 'react';
import { useHref } from 'react-router-dom';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseNestType } from '../../type/GooseNestType';
import { GooseTextAreaType } from '../../type/GooseTextAreaType';
import { GooseTooltipType } from '../../type/GooseTooltipType';

export default function GooseTextArea(inp: any) {

    


    let config: GooseTextAreaType = inp.input;
    let id: string = inp.id;

    const [valore, setValore] = React.useState(inp.valore);

    const aggiornaStato = (event: any)  => {
        setValore(event.target.value);
      };    


    return (<>
        <textarea onChange={aggiornaStato} className='form-control' id={id} rows={config.rows} value={valore} />
    </>);


}