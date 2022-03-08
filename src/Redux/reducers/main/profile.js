const initialState = {
    data : [],
    loading: false,
    error: false
}

const getProfile = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'PROFILE_REQUEST':
            return {...state, loading: true}
        case 'PROFILE_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'PROFILE_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default getProfile