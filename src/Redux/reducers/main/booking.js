const initialState = {
  data: [],
  loading: false,
  error: false
};

const FetchMyBookings = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_MY_BOOKINGS_REQUEST":
      return { ...state, loading: true };
    case "GET_MY_BOOKINGS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_MY_BOOKINGS_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default FetchMyBookings;
