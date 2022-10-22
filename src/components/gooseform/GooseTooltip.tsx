import React from 'react';
import { GooseTooltipType } from '../../type/GooseTooltipType';

export default function GooseTooltip(inp: any) {

    let input: GooseTooltipType = inp.input;

    return (<>
        <i title={input.description!=undefined?input.description:""} className={' '+input.icon}></i>        
    </>);


}