import { GooseButtonType } from "./GooseButtonType"
import { GooseComponentType } from "./GooseComponentType"
import { GooseControlType } from "./GooseControlType"
import { GooseHttpRequest } from "./GooseHttpRequest"
import { GoosePopupType } from "./GoosePopupType"

export type GooseFormType = {

    formId: string
    title: string
    icon: string
    sendButton: GooseButtonType
    resetButton: GooseButtonType
    description: string
    popup: GoosePopupType
    autocomplete: boolean
    destinationUrl: GooseHttpRequest
    originUrl: GooseHttpRequest
    components: Array<GooseComponentType>
    controls: Array<GooseControlType>
    renders: Array<GooseControlType>

}