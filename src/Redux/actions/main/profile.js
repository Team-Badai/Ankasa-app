import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND
});

export const getProfileRequest = () => {
  return {
    type: "PROFILE_REQUEST"
  };
};

export const getProfileSuccess = (data) => {
  return {
    type: "PROFILE_SUCCESS",
    payload: data
  };
};

export const getProfileFail = (error) => {
  return {
    type: "PROFILE_FAIL",
    payload: error
  };
};

export const getProfile = () => {
  return (dispatch) => {
    dispatch(getProfileRequest());
    const token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    return api
      .get("users/profile", config)
      .then((res) => {
        const data = res.data?.data;
        dispatch(getProfileSuccess(data));
        // console.log("ini profile", data);
      })
      .catch((err) => {
        const message = err.response.message;
        dispatch(getProfileFail(message));
      });
  };
};