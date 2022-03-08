import axios from 'axios'

const token = JSON.parse(localStorage.getItem("token"));

export const getBookingDetailRequest = () => {
    return {
        type: 'BOOKING_DETAIL_REQUEST'
    }
}

export const getBookingDetailSuccess = (data) => {
    return {
        type: 'BOOKING_DETAIL_SUCCESS',
        payload: data
    }
}

export const getBookingDetailFail = (error) => {
    return {
        type: 'BOOKING_DETAIL_FAIL',
        payload: error
    }
}

export const getBookingDetail = (id) => {
    return (dispatch) => {
        dispatch(getBookingDetailRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_URL_BACKEND}bookings/list-tickets`,
            headers: {Authorization: `Bearer ${token}`},
            data: {id_bookings: id}
        }).then((res) => {
            const data = res.data?.data
            dispatch(getBookingDetailSuccess(data))
            console.log(data);
        }).catch((err)=> {
            const message = err.response.message
            dispatch(getBookingDetailFail(message))
        })
    }
}