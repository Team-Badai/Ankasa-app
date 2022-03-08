import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW50b21iZW5nQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwic3RhdHVzIjoxLCJpYXQiOjE2NDY3NzI0NTEsImV4cCI6MTY0Njc3NjA1MSwiaXNzIjoiYW5rYXNhIn0.gBRT0R7RnV4Q_w_SgiJJVOW0EsV1GncO40W2whB8qls'

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