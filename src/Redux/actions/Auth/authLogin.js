import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND
});

export const AuthLoginRequest = () => {
  return {
    type: "AUTH_LOGIN_REQUEST"
  };
};
export const AuthLoginSuccess = (data) => {
  return {
    type: "AUTH_LOGIN_SUCCESS",
    payload: data
  };
};
export const AuthLoginFailed = (error) => {
  return {
    type: "AUTH_LOGIN_FAILED",
    payload: error
  };
};

export const AuthLogin = ({ form, navigate }) => {
  return (dispatch) => {
    dispatch(AuthLoginRequest());
    return api
      .post("users/login", form)
      .then((res) => {
        const data = res.data.data;
        const token = data.token;
        // console.log("INI REDUX",data);
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("auth", JSON.stringify(data));
        dispatch(AuthLoginSuccess(data));
        navigate("/");
      })
      .catch((err) => {
        const message = err.message;
        dispatch(AuthLoginFailed(message));
      });
  };
};