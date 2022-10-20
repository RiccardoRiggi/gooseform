import { combineReducers } from "redux";
import { feedbackReducer } from "../modules/feedback/reducer";
import { formDataReducer } from "../modules/formData/reducer";
import { formDisabledReducer } from "../modules/formDisabled/reducer";
import { formErrorReducer } from "../modules/formError/reducer";
import { formHideReducer } from "../modules/formHide/reducer";

const allReducers = {
    feedback: feedbackReducer,
    formData: formDataReducer,
    formError: formErrorReducer,
    formHide: formHideReducer,
    formDisabled: formDisabledReducer,
}
export const createReducers = () => {
    const appReducers = combineReducers({ ...allReducers });
    return appReducers;
}