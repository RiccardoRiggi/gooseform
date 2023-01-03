import React from "react";

export const fetchTestoSuccessAction  = (testoSuccess: any) => ({
    type: 'FETCH_TESTO_SUCCESS',
    testoSuccess
})

export const fetchTestoWarnAction  = (testoWarn: any) => ({
    type: 'FETCH_TESTO_WARN',
    testoWarn
})

export const fetchTestoDangerAction  = (testoDanger: any) => ({
    type: 'FETCH_TESTO_DANGER',
    testoDanger
})

export const fetchIsLoadingAction  = (isLoading: any) => ({
    type: 'FETCH_IS_LOADING',
    isLoading
})

export const fetchMantieniMessaggiAction  = (mantieniMessaggi: any) => ({
    type: 'FETCH_MANTIENI_MESSAGGI',
    mantieniMessaggi
})
