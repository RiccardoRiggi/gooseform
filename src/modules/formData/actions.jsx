import React from "react";

export const fetchFormData  = (formData) => ({
    type: 'FETCH_FORM_DATA',
    formData
})

export const resetFormData  = (formData) => ({
    type: 'RESET_FORM_DATA',
    formData
})
