import React from "react";

export const fetchFormError  = (formError) => ({
    type: 'FETCH_FORM_ERROR',
    formError
})

export const resetFormError  = (formError) => ({
    type: 'RESET_FORM_ERROR',
    formError
})
