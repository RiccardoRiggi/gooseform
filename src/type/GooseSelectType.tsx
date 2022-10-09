import { GooseHttpRequest } from "./GooseHttpRequest"
import { GooseKeyValue } from "./GooseKeyValue"

export type GooseSelectType = {

    size: number
    values: Array<GooseKeyValue>
    dynamicValues: GooseHttpRequest
    keyName: string
    valueName: string

}