import axios from "axios";

export const getFlightsResultRequest = () => {
    return {
        type: "GET_FLIGHTS_RESULT_REQUEST"
    };
};

export const getFlightsResultSuccess = (data) => {
    return {
        type: "GET_FLIGHTS_RESULT_SUCCESS",
        payload: data
    };
};

export const getFlightsResultFail = (error) => {
    return {
        type: "GET_FLIGHTS_RESULT_FAIL",
        payload: error
    };
};

export const getFlightsResult = ({})