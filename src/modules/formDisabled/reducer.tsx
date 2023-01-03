import React from "react";

export const initialState: any = {
    formDisabled: {},
}

export const formDisabledReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_FORM_DISABLED':
            return {
                ...state,
                formDisabled: action.formDisabled
            }
        case 'RESET_FORM_DISABLED':
            return {
                state
            }
        default:
            return state;
    }
}