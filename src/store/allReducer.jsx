import { combineReducers } from "redux";
import { feedbackReducer } from "../modules/feedback/reducer";
import { formDataReducer } from "../modules/formData/reducer";

const allReducers = {
    feedback: feedbackReducer,
    formData: formDataReducer
}
export const createReducers = () => {
    const appReducers = combineReducers({ ...allReducers });
    return appReducers;
}