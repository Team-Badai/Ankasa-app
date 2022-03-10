import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND
});

export const AuthResetPasswordRequest = () => {
  return {
    type: "AUTH_RESET_PASSWORD_REQUEST"
  };
};
export const AuthResetPasswordSuccess = (data) => {
  return {
    type: "AUTH_RESET_PASSWORD_SUCCESS",
    payload: data
  };
};
export const AuthResetPasswordFailed = (error) => {
  return {
    type: "AUTH_RESET_PASSWORD_FAILED",
    payload: error
  };
};

export const AuthResetPassword = ({
  form,
  setErrorMessage,
  handleModalSuccess,
  tokenReset
}) => {
  return (dispatch) => {
    dispatch(AuthResetPasswordRequest());
    return api
      .post("users/reset-password", form, {
        headers: { Authorization: `Bearer ${tokenReset}` }
      })
      .then((res) => {
        const data = res.data.data;
        dispatch(AuthResetPasswordSuccess(data));
        handleModalSuccess();
      })
      .catch((err) => {
        const message = err.response;
        if (err.response.status === 500) {
          setErrorMessage("We have trouble");
        } else {
          setErrorMessage(err.response.data.message);
        }
        dispatch(AuthResetPasswordFailed(message));
      });
  };
};
