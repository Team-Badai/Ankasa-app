import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND
});

export const AuthSignUpRequest = () => {
  return {
    type: "AUTH_SIGNUP_REQUEST"
  };
};
export const AuthSignUpSuccess = (data) => {
  return {
    type: "AUTH_SIGNUP_SUCCESS",
    payload: data
  };
};
export const AuthSignUpFailed = (error) => {
  return {
    type: "AUTH_SIGNUP_FAILED",
    payload: error
  };
};

export const AuthSignUp = ({
  signupData,
  handleModalSuccess,
  setErrorMessage
}) => {
  return (dispatch) => {
    dispatch(AuthSignUpRequest());
    return api
      .post("/users/signup", signupData)
      .then((res) => {
        const data = res.data.data;
        dispatch(AuthSignUpSuccess(data));
        handleModalSuccess();
      })
      .catch((err) => {
        const message = err.response;
        if (err.response.status === 500) {
          setErrorMessage("We have trouble");
        } else {
          setErrorMessage(err.response.data.message);
        }
        dispatch(AuthSignUpFailed(message));
      });
  };
};
