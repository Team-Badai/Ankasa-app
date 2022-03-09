import axios from "axios";
const token = JSON.parse(localStorage.getItem('token'))

export const BookingPaymentRequest = () => {
    return {
        type: "POST_BOOKING_PAYMENT_REQUEST"
    };
};

export const BookingPaymentSuccess = (data) => {
    return {
        type: "POST_BOOKING_PAYMENT_SUCCESS",
        payload: data
    };
};

export const BookingPaymentFail = (error) => {
    return {
        type: "POST_BOOKING_PAYMENT_FAIL",
        payload: error
    };
};

export const BookingPayment = ({id_bookings, id_cards}, handleNavigate) => {
    console.log()
    return (dispatch) => {
        dispatch(BookingPaymentRequest())
        return axios({
            data : {
                id_bookings : id_bookings,
                id_cards : id_cards
            },
            method : 'POST',
            baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
            url : `payments/create-payment`,
            headers : {'Authorization': `Bearer ${token}`}
        }).then((res) => {
            const data = res.data?.data
            dispatch(BookingPaymentSuccess(data))
            alert('Booking payment completed')
            handleNavigate('/main/booking')
        }).catch((err) => {
            const message = err.message
            dispatch(BookingPaymentFail(message))
            console.log(err)
        })
    }
}