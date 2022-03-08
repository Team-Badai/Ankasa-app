
import { combineReducers } from "redux"
import Booking from './main/booking'
import BookingDetail from './main/bookingDetail'
import UpdateProfile from "./main/updateProfile"
import ChangePicture from './main/changePicture'
import getProfile from './main/profile'

const rootReducers = combineReducers({
    Booking,
    BookingDetail,
    UpdateProfile,
    ChangePicture,
    getProfile
})

export default rootReducers

import { combineReducers } from "redux";

//------- import reducers
import AuthSignUp from "./auth/authSignUp";
import AuthLogin from "./auth/authLogin";
import FetchProfilePicture from "./main/changePicture";
import FetchBooking from "./main/booking";
import FetchBookingDetail from "./main/bookingDetail";
import FetchUpdateProfile from "./main/updateProfile";
import FetchSearchFlights from "./main/searchFlights";

const rootReducers = combineReducers({
  AuthSignUp,
  AuthLogin,
  FetchBooking,
  FetchBookingDetail,
  FetchProfilePicture,
  FetchUpdateProfile,
  FetchSearchFlights
});

export default rootReducers;

