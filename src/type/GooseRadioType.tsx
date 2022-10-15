import { GooseHttpRequest } from "./GooseHttpRequest"
import { GooseKeyValue } from "./GooseKeyValue"

export type GooseRadioType = {

    name: string
    disabled: boolean
    readonly: boolean
    values: Array<GooseKeyValue>
    dynamicValues: GooseHttpRequest
    keyName: string
    valueName: string

}