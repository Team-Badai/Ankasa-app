const initialState = {
    data: [],
    loading: false,
    error: false
};

const FetchPaymentCards = (state = initialState, action = {}) => {
    switch (action.type) {
        case "GET_PAYMENT_CARDS_REQUEST":
        return { ...state, loading: true };
        case "GET_PAYMENT_CARDS_SUCCESS":
        return { ...state, loading: false, data: action.payload };
        case "GET_PAYMENT_CARDS_FAIL":
        return { ...state, loading: false, error: action.payload };
        default:
        return state;
    }
};
  
export default FetchPaymentCards;