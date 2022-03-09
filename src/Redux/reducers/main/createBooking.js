const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchCreateBooking = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'CREATE_BOOKING_REQUEST':
            return {...state, loading: true}
        case 'CREATE_BOOKING_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'CREATE_BOOKING_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchCreateBooking