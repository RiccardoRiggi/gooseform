import { combineReducers } from "redux";
import { feedbackReducer } from "../modules/feedback/reducer";
import { formDataReducer } from "../modules/formData/reducer";
import { formDisabledReducer } from "../modules/formDisabled/reducer";
import { formErrorReducer } from "../modules/formError/reducer";
import { formHideReducer } from "../modules/formHide/reducer";
import { formListReducer } from "../modules/formList/reducer";

const allReducers = {
    feedback: feedbackReducer,
    formData: formDataReducer,
    formError: formErrorReducer,
    formHide: formHideReducer,
    formDisabled: formDisabledReducer,
    formList: formListReducer
}
export const createReducers = () => {
    const appReducers = combineReducers({ ...allReducers });
    return appReducers;
}