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
    setting: any//DIPENDE DAL type
    tooltip: GooseTooltipType
    popup: GoosePopupType
    requiredMark: boolean
    paddingTop: string
    paddingBottom: string
    paddingLeft: string
    paddingRight: string
}