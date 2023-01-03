import React from "react";

export const fetchFormDisabled  = (formDisabled: any) => ({
    type: 'FETCH_FORM_DISABLED',
    formDisabled
})

export const resetFormDisabled  = (formDisabled: any) => ({
    type: 'RESET_FORM_DISABLED',
    formDisabled
})
