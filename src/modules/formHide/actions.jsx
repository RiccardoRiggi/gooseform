import React from "react";

export const fetchFormHide  = (formHide) => ({
    type: 'FETCH_FORM_HIDE',
    formHide
})

export const resetFormHide  = (formHide) => ({
    type: 'RESET_FORM_HIDE',
    formHide
})
