import { GoosePopupType } from "./GoosePopupType"
import { GooseTooltipType } from "./GooseTooltipType"

export type GooseComponentType = {

    formId: string
    id: string
    type: string
    label: string
    widthXl: string
    widthLg: string
    widthMd: string
    widthSm: string
    width: string
    setting: Object//DIPENDE DAL type
    tooltip: GooseTooltipType
    popup: GoosePopupType
    requiredMark: boolean

}