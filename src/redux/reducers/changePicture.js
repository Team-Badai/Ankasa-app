const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchProfilePicture = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'CHANGE_PICTURE_REQUEST':
            return {...state, loading: true}
        case 'CHANGE_PICTURE_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'CHANGE_PICTURE_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchProfilePicture