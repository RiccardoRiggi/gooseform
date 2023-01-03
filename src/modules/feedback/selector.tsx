import React from "react";

export const getTestoSuccess = (state: any) => state.feedback.testoSuccess;

export const getTestoWarn = (state: any) => state.feedback.testoWarn;

export const getTestoDanger = (state: any) => state.feedback.testoDanger;

export const isLoading = (state: any) => state.feedback.isLoading;

export const mantieniMessaggi = (state: any) => state.feedback.mantieniMessaggi;