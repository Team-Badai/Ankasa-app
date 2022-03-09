import axios from 'axios'

const token = JSON.parse(localStorage.getItem("token"));

export const createBookingRequest = () => {
    return {
        type: 'CREATE_BOOKING_REQUEST'
    }
}

export const createBookingSuccess = (data) => {
    return {
        type: 'CREATE_BOOKING_SUCCESS',
        payload: data
    }
}

export const createBookingFail = (error) => {
    return {
        type: 'CREATE_BOOKING_FAIL',
        payload: error
    }
}

export const createBooking = (data) => {
    return (dispatch) => {
        dispatch(createBookingRequest())
        return axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_URL_BACKEND}bookings/create`,
            headers: {Authorization: `Bearer ${token}`},
            data: data
        }).then((res) => {
            const data = res.data?.data
            dispatch(createBookingSuccess(data))
            console.log(data);
        }).catch((err)=> {
            const message = err.message
            dispatch(createBookingFail(message))
        })
    }
}