import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../../../Components/module/Navbar";
import Footer from "../../../Components/module/Footer";
import Button from "../../../Components/Button";

import greyAircraft from "../../../assets/img/flightDetailGery.svg";
import masterCard from "../../../assets/img/mastercardLogo.svg";
import visaCard from "../../../assets/img/visaLogo.svg";
import "./payment.css";

import { FlightDetails } from "../../../Redux/actions/main/flightDetails";
import { PaymentCards } from "../../../Redux//actions/main/paymentCards";
import { BookingPaymentDetails } from "../../../Redux/actions/main/bookingPaymentDetails";
import { BookingPayment } from "../../../Redux/actions/main/payment";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FlightDetails(state.id_flights));
    dispatch(PaymentCards());
    dispatch(BookingPaymentDetails(state.id_bookings));
  }, []);
  const flightDetails = useSelector((state) => state.FetchFlightDetails);

  const bookingPayement = useSelector(
    (state) => state.FetchBookingPaymentDetails
  );
  const cards = useSelector((state) => state.FetchPaymentCards);
  const defaultCard = cards.data[0] ? cards.data[0].id : "";

  const bookingId = bookingPayement.data.bookingPaymentData
    ? bookingPayement.data.bookingPaymentData[0].id.toUpperCase()
    : "";
  const paymentId = bookingPayement.data.bookingPaymentData
    ? bookingPayement.data.bookingPaymentData[0].id_payments.toUpperCase()
    : "";
  const totalSeats = bookingPayement.data.bookingPaymentData
    ? bookingPayement.data.bookingPaymentData[0].total_seats
    : "";
  const totalLuggage = bookingPayement.data.bookingPaymentData
    ? bookingPayement.data.bookingPaymentData[0].total_luggage
    : "";
  const totalPrice = bookingPayement.data.bookingPaymentData
    ? bookingPayement.data.bookingPaymentData[0].total_price
    : "";
  const { passenger_list } = bookingPayement ? bookingPayement.data : "";

  const [selectedPaymentCard, setselectedPaymentCard] = useState(defaultCard);
  const handleOptionChange = (e) => {
    setselectedPaymentCard(e.target.value);
    console.log(selectedPaymentCard);
  };
  const handleNavigate = (path) => {
    navigate(path);
  };
  const handleSubmitClick = () => {
    const paymentData = {
      id_bookings: bookingId,
      id_cards: selectedPaymentCard
    };
    console.log(paymentData);
    dispatch(BookingPayment(paymentData, handleNavigate));
  };
  return (
    <div className="payment d-flex flex-column">
      <Navbar></Navbar>
      <section className="payment-wrapper d-flex">
        <div className="payment-left d-flex flex-fill flex-column w-75 h-100 bg-white rounded me-3 p-3">
          <div className="font-18 text-center mb-3">Passenger Details</div>
          {passenger_list
            ? passenger_list.map((item, index) => {
                return (
                  <div key={index} className="card d-flex flex-row p-3 mb-2">
                    <div className="col">
                      <div className="font-16 mb-2">
                        Name : {item.passenger_name}
                      </div>
                      <div className="font-16 mb-2">
                        Price : ${" "}
                        {flightDetails.data[0]
                          ? flightDetails.data[0].price
                          : ""}
                      </div>
                      <div className="font-16 mb-2">
                        Insurance : {item.travel_insurance}
                      </div>
                    </div>
                    <div className="col">
                      <div className="font-16 mb-2">
                        {flightDetails.data[0]
                          ? flightDetails.data[0].airline_name
                          : ""}{" "}
                        /{" "}
                        {flightDetails.data[0]
                          ? flightDetails.data[0].flight_number
                          : ""}
                      </div>
                      <div className="font-16 mb-2">
                        Price : ${" "}
                        {flightDetails.data[0]
                          ? flightDetails.data[0].price
                          : ""}
                      </div>
                      <div className="font-16 mb-2">
                        Insurance : $ {item.travel_insurance}
                      </div>
                    </div>
                    <div className="col">
                      <div className="font-16 mb-2">
                        {flightDetails.data[0]
                          ? flightDetails.data[0].origi_city
                          : ""}{" "}
                        <img className="mx-3" src={greyAircraft} alt="" />{" "}
                        {flightDetails.data[0]
                          ? flightDetails.data[0].destination_city
                          : ""}
                      </div>
                      <div className="font-16 mb-2">
                        Price : ${" "}
                        {flightDetails.data[0]
                          ? flightDetails.data[0].price
                          : ""}
                      </div>
                      <div className="font-16 mb-2">
                        Insurance : $ {item.travel_insurance}
                      </div>
                    </div>
                  </div>
                );
              })
            : "Loading Passenger Details"}
          <div className="cards-selection d-flex flex-column flex-fill w-100 h-100">
            <div className="font-18 text-center mb-3">
              Select your payment card :
            </div>
            <form className="d-flex px-5">
              <div className="container d-flex flex-column align-items-center">
                <div className="card d-flex mb-3 p-3 w-100 ms-2 blue2 rounded">
                  <div className="d-flex flex-column">
                    <div className="d-flex">
                      <div className="font-18 mb-2">
                        {cards.data[0] ? cards.data[0].card_number : "null"}
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="font-18 mb-2">
                          {cards.data[0] ? cards.data[0].card_type : null}
                        </div>
                      </div>
                      <div className="d-flex">
                        {cards.data[0] ? (
                          cards.data[0].card_provider === "VISA" ? (
                            <img
                              className="mx-3"
                              src={visaCard}
                              alt=""
                              width={50}
                            />
                          ) : (
                            <img
                              className="mx-3"
                              src={masterCard}
                              alt=""
                              width={50}
                            />
                          )
                        ) : (
                          "null"
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="radio"
                  value={cards.data[0] ? cards.data[0].id : "null"}
                  checked={
                    cards.data[0]
                      ? selectedPaymentCard === cards.data[0].id
                      : "null"
                  }
                  onChange={handleOptionChange}
                />
                <span className="checkmark"></span>
              </div>
              <div className="container d-flex flex-column align-items-center">
                <div className="card d-flex mb-3 p-3 w-100 ms-2 blue2 rounded">
                  <div className="d-flex flex-column">
                    <div className="d-flex">
                      <div className="font-18 mb-2">
                        {cards.data[1] ? cards.data[1].card_number : "null"}
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <div className="font-18 mb-2">
                          {cards.data[1] ? cards.data[1].card_type : "null"}
                        </div>
                      </div>
                      <div className="d-flex">
                        {cards.data[1] ? (
                          cards.data[1].card_provider === "VISA" ? (
                            <img className="mx-3" src={visaCard} alt="" />
                          ) : (
                            <img
                              className="mx-3"
                              src={masterCard}
                              alt=""
                              width={50}
                            />
                          )
                        ) : (
                          "null"
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="radio"
                  value={cards.data[1] ? cards.data[1].id : "null"}
                  checked={
                    cards.data[1]
                      ? selectedPaymentCard === cards.data[1].id
                      : "null"
                  }
                  onChange={handleOptionChange}
                />
                <span className="checkmark"></span>
              </div>
            </form>
          </div>
        </div>
        <div className="payment-right d-flex flex-fill w-25 bg-white rounded ms-3">
          <div className="payment-details d-flex flex-fill flex-column p-3">
            <div className="font-18 text-center mb-3">
              Payment Details
              <hr className="mt-0" />
            </div>
            <div className="d-flex justify-content-between">
              <div className="font-16 mb-2">Booking ID :</div>
              <div className="font-16 mb-2">
                {bookingId.length > 10 ? bookingId.slice(0, 8) : bookingId}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="font-16 mb-2">Payment ID :</div>
              <div className="font-16 mb-2">
                {paymentId.length > 10 ? paymentId.slice(0, 8) : paymentId}
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <div className="font-12 mb-2">Seats : {totalSeats} Persons</div>
              <div className="font-12 mb-2">Luggage : {totalLuggage} kg</div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <div className="font-16 mb-2">Total Price :</div>
              <div className="font-16 mb-2">$ {totalPrice}</div>
            </div>
            <div className="d-flex p-5">
              <div className="d-flex flex-fill justify-content-center">
                <Button
                  className="btn-sign bg-primary rounded-3 p-2 text-white shadow"
                  onClick={handleSubmitClick}
                >
                  Pay
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Payment;
