import { combineReducers } from "redux"
import Booking from './main/booking'
import BookingDetail from './main/bookingDetail'
import UpdateProfile from "./main/updateProfile"
import ChangePicture from './main/changePicture'

const rootReducers = combineReducers({
    Booking,
    BookingDetail,
    UpdateProfile,
    ChangePicture
})

export default rootReducers