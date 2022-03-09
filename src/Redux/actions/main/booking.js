import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

export const getMyBookingsRequest = () => {
  return {
    type: "GET_MY_BOOKINGS_REQUEST"
  };
};

export const getMyBookingsSuccess = (data) => {
  return {
    type: "GET_MY_BOOKINGS_SUCCESS",
    payload: data
  };
};

export const getMyBookingsFail = (error) => {
  return {
    type: "GET_MY_BOOKINGS_FAIL",
    payload: error
  };
};

export const getMyBookings = () => {
  return (dispatch) => {
    dispatch(getMyBookingsRequest());
    return axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BACKEND}bookings/my-booking`,
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => {
        const data = res.data?.data;
        dispatch(getMyBookingsSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(getMyBookingsFail(message));
      });
  };
};