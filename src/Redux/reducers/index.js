import { combineReducers } from "redux";

//------- import reducers
import AuthSignUp from "./auth/authSignUp";
import AuthLogin from "./auth/authLogin";
import FetchProfilePicture from "./main/changePicture";
import FetchBooking from "./main/booking";
import FetchBookingDetail from "./main/bookingDetail";
import FetchUpdateProfile from "./main/updateProfile";
import FetchSearchFlights from "./main/searchFlights";
import FetchUser from "./main/user";
import getProfile from "./main/profile";
import FetchCreateBooking from "./main/createBooking";

const rootReducers = combineReducers({
  AuthSignUp,
  AuthLogin,
  FetchBooking,
  FetchBookingDetail,
  FetchProfilePicture,
  FetchUpdateProfile,
  FetchSearchFlights,
  FetchUser,
  getProfile,
  FetchCreateBooking
});

export default rootReducers;

