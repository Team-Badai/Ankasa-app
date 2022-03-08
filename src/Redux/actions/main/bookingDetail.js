import axios from 'axios'

const token = localStorage.getItem()

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
            method: 'GET',
            url: `${process.env.REACT_APP_URL_BACKEND}BookingDetail/${id}`,
            headers: {Authorization: `Bearer ${token}`}
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