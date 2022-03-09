import { combineReducers } from "redux";

//------- import reducers
import AuthSignUp from "./auth/authSignUp";
import AuthLogin from "./auth/authLogin";
import FetchProfilePicture from "./main/changePicture";
import FetchMyBookings from "./main/booking";
import FetchBookingDetail from "./main/bookingDetail";
import FetchUpdateProfile from "./main/updateProfile";
import FetchSearchFlights from "./main/searchFlights";
import FetchUser from "./main/user";
import getProfile from "./main/profile";

const rootReducers = combineReducers({
  AuthSignUp,
  AuthLogin,
  FetchMyBookings,
  FetchBookingDetail,
  FetchProfilePicture,
  FetchUpdateProfile,
  FetchSearchFlights,
  FetchUser,
  getProfile
});

export default rootReducers;
