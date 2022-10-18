import React from "react";

export const fetchFormDisabled  = (formDisabled) => ({
    type: 'FETCH_FORM_DISABLED',
    formDisabled
})

export const resetFormDisabled  = (formDisabled) => ({
    type: 'RESET_FORM_DISABLED',
    formDisabled
})
