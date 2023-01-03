import React from "react";

export const initialState: any = {
    formError: {},
}

export const formErrorReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_FORM_ERROR':
            return {
                ...state,
                formError: action.formError
            }
        case 'RESET_FORM_ERROR':
            return {
                state
            }
        default:
            return state;
    }
}