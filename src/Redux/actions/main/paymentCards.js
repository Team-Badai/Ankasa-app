import axios from "axios";
const token = JSON.parse(localStorage.getItem('token'))

export const PaymentCardsRequest = () => {
    return {
        type: "GET_PAYMENT_CARDS_REQUEST"
    };
};

export const PaymentCardsSuccess = (data) => {
    return {
        type: "GET_PAYMENT_CARDS_SUCCESS",
        payload: data
    };
};

export const PaymentCardsFail = (error) => {
    return {
        type: "GET_PAYMENT_CARDS_FAIL",
        payload: error
    };
};

export const PaymentCards = () => {
    console.log()
    return (dispatch) => {
        dispatch(PaymentCardsRequest())
        return axios({
            method : 'GET',
            baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
            url : `payments/list-cards`,
            headers : {'Authorization': `Bearer ${token}`}
        }).then((res) => {
            const data = res.data?.data
            dispatch(PaymentCardsSuccess(data))
        }).catch((err) => {
            const message = err.message
            dispatch(PaymentCardsFail(message))
            console.log(err)
        })
    }
}