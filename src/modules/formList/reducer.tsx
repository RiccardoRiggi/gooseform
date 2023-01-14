import React from "react";

export const initialState = {
    formList: {},
}

export const formListReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_FORM_LIST':
            return {
                ...state,
                formList: action.formList
            }
        case 'RESET_FORM_LIST':
            return {
                state
            }
        default:
            return state;
    }
}