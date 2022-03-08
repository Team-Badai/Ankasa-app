import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW50b21iZW5nQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwic3RhdHVzIjoxLCJpYXQiOjE2NDY3NzI0NTEsImV4cCI6MTY0Njc3NjA1MSwiaXNzIjoiYW5rYXNhIn0.gBRT0R7RnV4Q_w_SgiJJVOW0EsV1GncO40W2whB8qls'

export const updateProfileRequest = () => {
    return {
        type: 'PUT_PROFILE_REQUEST'
    }
}

export const updateProfileSuccess = (data) => {
    return {
        type: 'PUT_PROFILE_SUCCESS',
        payload: data
    }
}

export const updateProfileFail = (error) => {
    return {
        type: 'PUT_PROFILE_FAIL',
        payload: error
    }
}

export const updateProfile = (form) => {
    return (dispatch) => {
        dispatch(updateProfileRequest())
        return axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_URL_BACKEND}users/profile-update`,
            headers: {Authorization: `Bearer ${token}`},
            data: {
                email: form.email,
                phone_number: form.phone_number,
                fullname: form.fullname,
                city: form.city,
                address: form.address,
                post_code: form.post_code
            }
        }).then((res) => {
            const data = res.data?.data
            dispatch(updateProfileSuccess(data))
            console.log(data);
        }).catch((err)=> {
            const message = err.message
            dispatch(updateProfileFail(message))
            console.log(form);
        })
    }
}