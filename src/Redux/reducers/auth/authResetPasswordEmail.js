const initialState = {
  data: [],
  loading: false,
  error: false
};

const AuthEmailResetPassword = (state = initialState, action = {}) => {
  switch (action.type) {
    case "AUTH_EMAIL_RESET_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "AUTH_EMAIL_RESET_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "AUTH_EMAIL_RESET_FAILED":
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

export default AuthEmailResetPassword;
