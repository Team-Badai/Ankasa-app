import axios from "axios";
const token = JSON.parse(localStorage.getItem('token'))

export const FlightDetailsRequest = () => {
    return {
        type: "GET_FLIGHT_DETAILS_REQUEST"
    };
};

export const FlightDetailsSuccess = (data) => {
    return {
        type: "GET_FLIGHT_DETAILS_SUCCESS",
        payload: data
    };
};

export const FlightDetailsFail = (error) => {
    return {
        type: "GET_FLIGHT_DETAILS_FAIL",
        payload: error
    };
};

export const FlightDetails = (id_flights) => {
    console.log(id_flights)
    return (dispatch) => {
        dispatch(FlightDetailsRequest())
        return axios({
            data: {id_flights : id_flights},
            method : 'POST',
            baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
            url : `flights/details`,
            headers : {'Authorization': `Bearer ${token}`}
        }).then((res) => {
            const data = res.data?.data
            dispatch(FlightDetailsSuccess(data))
        }).catch((err) => {
            const message = err.message
            dispatch(FlightDetailsFail(message))
            console.log(err)
        })
    }
}