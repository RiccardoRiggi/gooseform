import React from "react";

export const fetchFormHide  = (formHide: any) => ({
    type: 'FETCH_FORM_HIDE',
    formHide
})

export const resetFormHide  = (formHide: any) => ({
    type: 'RESET_FORM_HIDE',
    formHide
})
