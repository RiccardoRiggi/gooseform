import { GooseKeyValue } from "./GooseKeyValue"

export type GooseHttpRequest = {

    url: string
    method: string
    headers: Array<GooseKeyValue>
    body: string

}