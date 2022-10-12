import { GooseHttpRequest } from "./GooseHttpRequest"
import { GooseKeyValue } from "./GooseKeyValue"

export type GooseDataListType = {
    
    name: string
    placeholder: string
    disabled: boolean
    readonly: boolean
    autofocus: boolean
    values: Array<GooseKeyValue>
    dynamicValues: GooseHttpRequest
    keyName: string
    valueName: string


}