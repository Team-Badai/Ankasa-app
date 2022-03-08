import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_ANKASA_API
})

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

// export const AuthSignUp = (data) => {
//   return (dispatch) => {
//     dispatch(AuthSignUpRequest());
//     return api.post('/users/signup', data.form)
//       .then((res) => {
//         const data = res.data?.data;
//         console.log(data);
//         // const userId = data.id;
//         // localStorage.setItem("userId", JSON.stringify(userId));
//         dispatch(AuthSignUpSuccess(data));
//       })
//       .catch((err) => {
//         const message = err.message
//         dispatch(AuthSignUpFailed(message))
//       });
//   };
// };

export const AuthSignUp = (data)=>{
  return (dispatch) =>{
      dispatch(AuthSignUpRequest())
      return api.post('/users/signup', data.form)
      .then((res)=>{
          const data = res.data.data
          dispatch(AuthSignUpSuccess(data))
      }).catch((err)=>{
          const message = err.message
          dispatch(AuthSignUpFailed(message))
      })
  }
}