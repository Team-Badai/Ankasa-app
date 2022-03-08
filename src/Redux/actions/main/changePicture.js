import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW50b21iZW5nQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwic3RhdHVzIjoxLCJpYXQiOjE2NDY3NzI0NTEsImV4cCI6MTY0Njc3NjA1MSwiaXNzIjoiYW5rYXNhIn0.gBRT0R7RnV4Q_w_SgiJJVOW0EsV1GncO40W2whB8qls'

export const changePictureRequest = () => {
    return {
        type: 'CHANGE_PICTURE_REQUEST'
    }
}

export const changePictureSuccess = (data) => {
    return {
        type: 'CHANGE_PICTURE_SUCCESS',
        payload: data
    }
}

export const changePictureFail = (error) => {
    return {
        type: 'CHANGE_PICTURE_FAIL',
        payload: error
    }
}

export const changePicture = (formData) => {
    return (dispatch) => {
        dispatch(changePictureRequest())
        return axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_URL_BACKEND}users/profile-picture`,
            headers: {Authorization: `Bearer ${token}`},
            data: formData
        }).then((res) => {
            const data = res.data?.data
            dispatch(changePictureSuccess(data))
        }).catch((err) => {
            const message = err.message
            dispatch(changePictureFail(message))
            console.log(formData);
        })
    }
}