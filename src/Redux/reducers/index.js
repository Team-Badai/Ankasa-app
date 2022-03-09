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