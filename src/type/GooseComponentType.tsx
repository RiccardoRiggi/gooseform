import { GoosePopupType } from "./GoosePopupType"
import { GooseTooltipType } from "./GooseTooltipType"

export type GooseComponentType = {

    formId: String
    id: String
    type: String
    label: String
    widthXl: String
    widthLg: String
    widthMd: String
    widthSm: String
    width: String
    setting: Object//DIPENDE DAL type
    tooltip: GooseTooltipType
    popup: GoosePopupType
    requiredMark: boolean

}