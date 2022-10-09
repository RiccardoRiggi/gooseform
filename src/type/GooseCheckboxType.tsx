import { GooseHttpRequest } from "./GooseHttpRequest"
import { GooseKeyValue } from "./GooseKeyValue"

export type GooseCheckboxType = {

    name: String
    disabled: boolean
    readonly: boolean
    values: Array<GooseKeyValue>
    dynamicValues: GooseHttpRequest
    keyName: String
    valueName: String

}