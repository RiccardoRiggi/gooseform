import React from "react";

export const fetchFormError  = (formError: any) => ({
    type: 'FETCH_FORM_ERROR',
    formError
})

export const resetFormError  = (formError: any) => ({
    type: 'RESET_FORM_ERROR',
    formError
})
