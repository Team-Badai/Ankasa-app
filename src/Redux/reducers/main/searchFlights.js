const initialState = {
    data: [],
    loading: false,
    error: false
  };
  
  const FetchSearchFlights = (state = initialState, action = {}) => {
    switch (action.type) {
      case "SEARCH_FLIGHTS_REQUEST":
        return { ...state, loading: true };
      case "SEARCH_FLIGHTS_SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "SEARCH_FLIGHTS_FAIL":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default FetchSearchFlights;