const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchBookingDetail = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'BOOKING_DETAIL_REQUEST':
            return {...state, loading: true}
        case 'BOOKING_DETAIL_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'BOOKING_DETAIL_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchBookingDetail