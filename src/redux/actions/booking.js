import axios from 'axios'

// const token = localStorage.getItem()

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
            url: `${process.env.REACT_APP_URL_BACKEND}flights`
            // headers: {Authorization: `Bearer ${token}`}
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