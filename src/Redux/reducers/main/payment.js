const initialState = {
    data: [],
    loading: false,
    error: false
};

const PostBookingPayment = (state = initialState, action = {}) => {
    switch (action.type) {
        case "POST_BOOKING_PAYMENT_REQUEST":
        return { ...state, loading: true };
        case "POST_BOOKING_PAYMENT_SUCCESS":
        return { ...state, loading: false, data: action.payload };
        case "POST_BOOKING_PAYMENT_FAIL":
        return { ...state, loading: false, error: action.payload };
        default:
        return state;
    }
};
  
export default PostBookingPayment;