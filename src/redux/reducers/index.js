import { combineReducers } from "redux"
import Booking from './booking'
import BookingDetail from './bookingDetail'
import UpdateProfile from "./updateProfile"
import ChangePicture from './changePicture'

const rootReducers = combineReducers({
    Booking,
    BookingDetail,
    UpdateProfile,
    ChangePicture
})

export default rootReducers