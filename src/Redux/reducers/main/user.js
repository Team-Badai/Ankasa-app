const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchUser = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_USER_REQUEST':
            return {...state, loading: true}
        case 'GET_USER_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'GET_USER_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchUser