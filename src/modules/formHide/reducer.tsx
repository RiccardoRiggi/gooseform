import React from "react";

export const initialState = {
    formHide: {},
}

export const formHideReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_FORM_HIDE':
            return {
                ...state,
                formHide: action.formHide
            }
        case 'RESET_FORM_HIDE':
            return {
                state
            }
        default:
            return state;
    }
}