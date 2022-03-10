const initialState = {
  data: [],
  loading: false,
  error: false
};

const AuthResetPassword = (state = initialState, action = {}) => {
  switch (action.type) {
    case "AUTH_RESET_PASSWORD_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "AUTH_RESET_PASSWORD_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "AUTH_RESET_PASSWORD_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
      };
    default:
      return state;
  }
};

export default AuthResetPassword;
