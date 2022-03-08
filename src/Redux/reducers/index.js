import { combineReducers } from "redux";

//------- import reducers
import AuthSignUp from "./auth/authSignUp";
import AuthLogin from "./auth/authLogin";

const rootReducers = combineReducers({
    AuthSignUp,
    AuthLogin
});

export default rootReducers;