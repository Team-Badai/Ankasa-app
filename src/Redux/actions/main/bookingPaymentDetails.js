import axios from "axios";
const token = JSON.parse(localStorage.getItem('token'))

export const BookingPaymentDetailsRequest = () => {
    return {
        type: "FETCH_BOOKING_PAYMENT_DETAILS_REQUEST"
    };
};

export const BookingPaymentDetailsSuccess = (data) => {
    return {
        type: "FETCH_BOOKING_PAYMENT_DETAILS_SUCCESS",
        payload: data
    };
};

export const BookingPaymentDetailsFail = (error) => {
    return {
        type: "FETCH_BOOKING_PAYMENT_DETAILS_FAIL",
        payload: error
    };
};

export const BookingPaymentDetails = (id_bookings) => {
    console.log()
    return (dispatch) => {
        dispatch(BookingPaymentDetailsRequest())
        return axios({
            data : {id_bookings: id_bookings},
            method : 'POST',
            baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
            url : `payments/payment-details`,
            headers : {'Authorization': `Bearer ${token}`}
        }).then((res) => {
            const data = res.data?.data
            dispatch(BookingPaymentDetailsSuccess(data))
        }).catch((err) => {
            const message = err.message
            dispatch(BookingPaymentDetailsFail(message))
            console.log(err)
        })
    }
}