import axios from "axios";

export const SearchFlightsRequest = () => {
  return {
    type: "SEARCH_FLIGHTS_REQUEST"
  };
};

export const SearchFlightsSuccess = (data) => {
  return {
    type: "SEARCH_FLIGHTS_SUCCESS",
    payload: data
  };
};

export const SearchFlightsFail = (error) => {
  return {
    type: "SEARCH_FLIGHTS_FAIL",
    payload: error
  };
};

export const SearchFlights = ({ searchFlightForm, toResultPage }) => {
  return (dispatch) => {
    dispatch(SearchFlightsRequest());
    return axios
      .post(`${process.env.REACT_APP_URL_BACKEND}flights`, {
        origin_city: searchFlightForm.origin_city,
        destination_city: searchFlightForm.destination_city,
        journey: searchFlightForm.journey,
        departure_date: searchFlightForm.departure_date,
        total_passenger: searchFlightForm.total_passenger,
        flight_class: searchFlightForm.flight_class
      })
      .then((res) => {
        const data = res.data?.data;
        dispatch(SearchFlightsSuccess(data));
        toResultPage();
      })
      .catch((err) => {
        const message = err.response;
        dispatch(SearchFlightsFail(message));
      });
  };
};