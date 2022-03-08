import axios from 'axios'

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

export const changePicture = ({ formData, navigate }) => {
    return (dispatch) => {
        dispatch(changePictureRequest())
        return axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_URL_BACKEND}users/profile-picture`,
            data: formData
        }).then((res) => {
            const data = res.data?.data
            dispatch(changePictureSuccess(data))
            navigate('/profile')
        }).catch((err) => {
            const message = err.message
            dispatch(changePictureFail(message))
            console.log(formData);
        })
    }
}