import { combineReducers } from "redux";

//------- import reducers
import AuthSignUp from "./auth/authSignUp";
import AuthLogin from "./auth/authLogin";
import AuthEmailResetPassword from "./auth/authResetPasswordEmail";
import AuthResetPassword from "./auth/authResetPassword";
import FetchProfilePicture from "./main/changePicture";
import FetchMyBookings from "./main/booking";
import FetchBookingDetail from "./main/bookingDetail";
import FetchUpdateProfile from "./main/updateProfile";
import FetchSearchFlights from "./main/searchFlights";
import FetchFlightDetails from "./main/flightDetails";
import FetchPaymentCards from "./main/paymentCards";
import FetchBookingPaymentDetails from "./main/bookingPaymentDetails";
import PostBookingPayment from "./main/payment";
import getProfile from "./main/profile";
import FetchUser from "./main/user";
import FetchCreateBooking from "./main/createBooking";

const rootReducers = combineReducers({
  AuthSignUp,
  AuthLogin,
  AuthEmailResetPassword,
  AuthResetPassword,
  FetchMyBookings,
  FetchBookingDetail,
  FetchProfilePicture,
  FetchUpdateProfile,
  FetchSearchFlights,
  FetchFlightDetails,
  FetchPaymentCards,
  FetchBookingPaymentDetails,
  PostBookingPayment,
  FetchUser,
  getProfile,
  FetchCreateBooking
});

export default rootReducers;
