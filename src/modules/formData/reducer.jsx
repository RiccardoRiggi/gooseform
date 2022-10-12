import React from "react";

export const initialState = {
    formData: {},
}

export const formDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_FORM_DATA':
            return {
                ...state,
                formData: action.formData
            }
        case 'RESET_FORM_DATA':
            return {
                state
            }
        default:
            return state;
    }
}