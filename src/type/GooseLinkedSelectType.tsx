import { GooseHttpRequest } from "./GooseHttpRequest"
import { GooseKeyValue } from "./GooseKeyValue"

export type GooseLinkedSelectType = {

    size: number
    values: Array<GooseKeyValue>
    dynamicValues: GooseHttpRequest
    keyName: String
    valueName: String
    idLinkedSelect: String//SCATURIRE EVENTO ONCHANGE PER AGGIORNARE LA SECONDA COMBO

}