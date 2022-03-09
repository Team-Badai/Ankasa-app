import axios from 'axios'

const token = JSON.parse(localStorage.getItem("token"));

export const getUserRequest = () => {
    return {
        type: 'GET_USER_REQUEST'
    }
}

export const getUserSuccess = (data) => {
    return {
        type: 'GET_USER_SUCCESS',
        payload: data
    }
}

export const getUserFail = (error) => {
    return {
        type: 'GET_USER_FAIL',
        payload: error
    }
}

export const getUser = () => {
    return (dispatch) => {
        dispatch(getUserRequest())
        return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_BACKEND}users/profile`,
            headers: {Authorization: `Bearer ${token}`}
        }).then((res) => {
            const data = res.data?.data
            dispatch(getUserSuccess(data))
            console.log(data);
        }).catch((err)=> {
            const message = err.response.message
            dispatch(getUserFail(message))
        })
    }
}