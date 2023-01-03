import React from "react";

export const initialState: any = {
    formData: {},
}

export const formDataReducer = (state = initialState, action: any) => {
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