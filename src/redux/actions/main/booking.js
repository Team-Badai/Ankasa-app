import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW50b21iZW5nQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwic3RhdHVzIjoxLCJpYXQiOjE2NDY3Njg3NzcsImV4cCI6MTY0Njc3MjM3NywiaXNzIjoiYW5rYXNhIn0.rh3iYcMfamxkMIQ3AxW5-uWaX1AhNsDRa2XhEWW7bSk'

export const getFlightsRequest = () => {
    return {
        type: 'GET_FLIGHTS_REQUEST'
    }
}

export const getFlightsSuccess = (data) => {
    return {
        type: 'GET_FLIGHTS_SUCCESS',
        payload: data
    }
}

export const getFlightsFail = (error) => {
    return {
        type: 'GET_FLIGHTS_FAIL',
        payload: error
    }
}

export const getFlights = () => {
    return (dispatch) => {
        dispatch(getFlightsRequest())
        return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_BACKEND}bookings/my-booking`,
            headers: {Authorization: `Bearer ${token}`}
        }).then((res) => {
            const data = res.data?.data
            dispatch(getFlightsSuccess(data))
            console.log(data);
        }).catch((err)=> {
            const message = err.response.message
            dispatch(getFlightsFail(message))
        })
    }
}