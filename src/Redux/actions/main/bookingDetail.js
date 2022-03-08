import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW50b21iZW5nQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwic3RhdHVzIjoxLCJpYXQiOjE2NDY3NjkzNjgsImV4cCI6MTY0Njc3Mjk2OCwiaXNzIjoiYW5rYXNhIn0.vVXhzdH1CFSSEr_UZfwdkzC9Zx7WeTzDe_0sv8jFxsk'

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