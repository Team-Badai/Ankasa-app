import { combineReducers } from "redux";

//------- import reducers
import AuthSignUp from "./auth/authSignUp";

const rootReducers = combineReducers({
    AuthSignUp
});

export default rootReducers;