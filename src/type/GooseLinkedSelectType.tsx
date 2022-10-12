import { GooseHttpRequest } from "./GooseHttpRequest"
import { GooseKeyValue } from "./GooseKeyValue"

export type GooseLinkedSelectType = {

    size: number
    values: Array<GooseKeyValue>
    dynamicValues: GooseHttpRequest
    keyName: string
    valueName: string
    idLinkedSelectPadre: string//SCATURIRE EVENTO ONCHANGE PER AGGIORNARE LA SECONDA COMBO
    idLinkedSelectFiglia: string//SCATURIRE EVENTO ONCHANGE PER AGGIORNARE LA SECONDA COMBO


}