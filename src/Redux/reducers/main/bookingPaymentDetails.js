const initialState = {
    data: [],
    loading: false,
    error: false
};

const FetchBookingPaymentDetails = (state = initialState, action = {}) => {
    switch (action.type) {
        case "FETCH_BOOKING_PAYMENT_DETAILS_REQUEST":
        return { ...state, loading: true };
        case "FETCH_BOOKING_PAYMENT_DETAILS_SUCCESS":
        return { ...state, loading: false, data: action.payload };
        case "FETCH_BOOKING_PAYMENT_DETAILS_FAIL":
        return { ...state, loading: false, error: action.payload };
        default:
        return state;
    }
};
  
export default FetchBookingPaymentDetails;