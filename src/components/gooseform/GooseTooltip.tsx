import React from 'react';
import { GooseComponentType } from '../../type/GooseComponentType';
import { GooseFormType } from '../../type/GooseFormType';
import { GooseNestType } from '../../type/GooseNestType';
import { GooseTooltipType } from '../../type/GooseTooltipType';

export default function GooseTooltip(inp: any) {

    let input: GooseTooltipType = inp.input;



    return (<>
        <i title={input.description!=undefined?input.description.toString():""} className={' '+input.icon}></i>        
    </>);


}