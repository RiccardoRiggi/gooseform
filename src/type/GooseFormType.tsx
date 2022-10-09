import { GooseButtonType } from "./GooseButtonType"
import { GooseComponentType } from "./GooseComponentType"
import { GooseControlType } from "./GooseControlType"
import { GooseHttpRequest } from "./GooseHttpRequest"
import { GoosePopupType } from "./GoosePopupType"

export type GooseFormType = {

    formId: String
    title: String
    icon: String
    sendButton: GooseButtonType
    resetButton: GooseButtonType
    description: String
    popup: GoosePopupType
    autocomplete: boolean
    destinationUrl: GooseHttpRequest
    originUrl: GooseHttpRequest
    components: Array<GooseComponentType>
    controls: Array<GooseControlType>

}