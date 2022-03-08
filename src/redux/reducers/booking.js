const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchBooking = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_FLIGHTS_REQUEST':
            return {...state, loading: true}
        case 'GET_FLIGHTS_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'GET_FLIGHTS_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchBooking