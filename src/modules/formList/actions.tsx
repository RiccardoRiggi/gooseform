import React from "react";

export const fetchFormList  = (formList: any) => ({
    type: 'FETCH_FORM_LIST',
    formList
})

export const resetFormList  = (formList: any) => ({
    type: 'RESET_FORM_LIST',
    formList
})
