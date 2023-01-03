import React from "react";

export const fetchFormData  = (formData: any) => ({
    type: 'FETCH_FORM_DATA',
    formData
})

export const resetFormData  = (formData: any) => ({
    type: 'RESET_FORM_DATA',
    formData
})
