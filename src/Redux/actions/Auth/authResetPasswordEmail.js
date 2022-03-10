import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND
});

export const AuthEmailResetRequest = () => {
  return {
    type: "AUTH_EMAIl_RESET_REQUEST"
  };
};
export const AuthEmailResetSuccess = (data) => {
  return {
    type: "AUTH_EMAIl_RESET_SUCCESS",
    payload: data
  };
};
export const AuthEmailResetFailed = (error) => {
  return {
    type: "AUTH_EMAIl_RESET_FAILED",
    payload: error
  };
};

export const AuthEmailReset = ({
  form,
  setErrorMessage,
  handleModalSuccess
}) => {
  return (dispatch) => {
    dispatch(AuthEmailResetRequest());
    return api
      .post("users/reset-password-email", form)
      .then((res) => {
        const data = res.data.data;
        dispatch(AuthEmailResetSuccess(data));
        handleModalSuccess();
      })
      .catch((err) => {
        const message = err.response;
        if (err.response.status === 500) {
          setErrorMessage("We have trouble");
        } else {
          setErrorMessage(err.response.data.message);
        }
        dispatch(AuthEmailResetFailed(message));
      });
  };
};
