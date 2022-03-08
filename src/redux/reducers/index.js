import { combineReducers } from "redux"

//------- import reducers
import AuthSignUp from "./auth/authSignUp";
import AuthLogin from "./auth/authLogin";
import Booking from './main/booking'
import BookingDetail from './main/bookingDetail'
import UpdateProfile from "./main/updateProfile"
import ChangePicture from './main/changePicture'
import User from './main/user'

const rootReducers = combineReducers({
    AuthSignUp,
    AuthLogin,
    Booking,
    BookingDetail,
    UpdateProfile,
    ChangePicture,
    User
})

export default rootReducers