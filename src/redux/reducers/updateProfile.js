const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchUpdateProfile = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'PUT_PROFILE_REQUEST':
            return {...state, loading: true}
        case 'PUT_PROFILE_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'PUT_PROFILE_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchUpdateProfile