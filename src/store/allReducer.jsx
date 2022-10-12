import { combineReducers } from "redux";
import { feedbackReducer } from "../modules/feedback/reducer";
import { formDataReducer } from "../modules/formData/reducer";
import { formErrorReducer } from "../modules/formError/reducer";

const allReducers = {
    feedback: feedbackReducer,
    formData: formDataReducer,
    formError: formErrorReducer,
}
export const createReducers = () => {
    const appReducers = combineReducers({ ...allReducers });
    return appReducers;
}