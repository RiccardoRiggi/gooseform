import { GooseHttpRequest } from "./GooseHttpRequest"
import { GooseKeyValue } from "./GooseKeyValue"

export type GooseDataListType = {
    
    name: String
    placeholder: String
    disabled: boolean
    readonly: boolean
    autofocus: boolean
    values: Array<GooseKeyValue>
    dynamicValues: GooseHttpRequest
    keyName: String
    valueName: String


}