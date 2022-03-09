/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../../Components/module/Navbar";
import Footer from "../../../Components/module/Footer";
import garuda from "../../../assets/img/garuda-indonesia-logo-BD82882F07-seeklogo 3.svg";
import lionLogo from "../../../assets/img/lionLogo.svg";
import airasiaLogo from "../../../assets/img/airasiaLogo.svg";
import plane from ".././../../assets/img/plane.svg";
import Barcode from "react-barcode";
import { useDispatch, useSelector } from "react-redux";
import { getBookingDetail } from "../../../Redux/actions/main/bookingDetail";

const BookingDetail = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();

  const data = useSelector((state) => state.FetchBookingDetail);
  const bookingId = state.id_booking;
  const airlineName = state.airline_name;
  console.log(state);

  useEffect(() => {
    dispatch(getBookingDetail(bookingId));
  }, []);

  let airline_logo;
  switch (airlineName) {
    case "Garuda Indonesia":
      airline_logo = garuda;
      break;
    case "Air Asia":
      airline_logo = airasiaLogo;
      break;
    case "Lion Air":
      airline_logo = lionLogo;
      break;
    default:
      airline_logo = null;
  }

  return (
    <div className="d-flex flex-column wrapper-home">
      <Navbar></Navbar>
      <main class="flex-fill bg-primary">
        <p className="fs-4 fw-bold p-5 d-md-none text-white">Booking Pass</p>
        <div class="container booking-pass bg-white rounded my-5 d-none d-md-block">
          <div className="d-flex justify-content-between">
            <p className="fs-4 fw-bold">Booking Pass</p>
            <div class="three-dots"></div>
          </div>
          {data.data.map((item) => {
            return (
              <div class="ticket d-flex justify-content-between shadow-sm rounded mt-3 border">
                <div className="board d-flex flex-column justify-content-between p-5">
                  <img src={airline_logo} alt="AirlineLogo" />
                  <p className="fs-3 fw-bold text-center mt-3">
                    {item.origin_city}
                  </p>
                  <img src={plane} alt="" height="20" />
                  <p className="fs-3 fw-bold text-center mt-4">
                    {item.destination_city}
                  </p>
                </div>
                <div className="board p-5 row">
                  <div class="col lh-1">
                    <p className="text-muted">
                      <small>Passenger</small>
                    </p>
                    <span>{item.passenger_name}</span>
                  </div>
                  <div class="col lh-1">
                    <p className="text-muted">
                      <small>Class</small>
                    </p>
                    <span>{item.class_type}</span>
                  </div>

                  <div class="w-100"></div>

                  <div class="col lh-1">
                    <p className="text-muted">
                      <small>Departure</small>
                    </p>
                    <span>{item.departure_date}</span>
                  </div>
                  <div class="col lh-1">
                    <p className="text-muted">
                      <small>Time</small>
                    </p>
                    <span>{item.departure_time}</span>
                  </div>

                  <div class="w-100"></div>

                  <div class="col lh-1">
                    <p className="text-muted">
                      <small>Code</small>
                    </p>
                    <span>{item.flight_number}</span>
                  </div>
                  <div class="col lh-1">
                    <p className="text-muted">
                      <small>Terminal</small>
                    </p>
                    <span>{item.terminal}</span>
                  </div>

                  <div class="w-100"></div>

                  <div class="col lh-1">
                    <p className="text-muted">
                      <small>Gate</small>
                    </p>
                    <span>{item.gate}</span>
                  </div>
                  <div class="col lh-1">
                    <p className="text-muted">
                      <small>Seat</small>
                    </p>
                    <span>{item.seat_number}</span>
                  </div>
                </div>
                <div className="barcode text-center">
                  <Barcode value={item.flight_number}></Barcode>
                </div>
              </div>
            );
          })}
        </div>
        {/* Responsive */}
        {data.data.map((item) => {
          return (
            <div class="d-flex d-md-none flex-column justify-content-between shadow-sm rounded mb-5 mx-5 bg-white">
              <img
                className="mt-4"
                src={airline_logo}
                alt="AirlineLogo"
                height="60"
              />
              <div className="d-flex justify-content-evenly mt-4">
                <p className="fs-2 fw-bold">{item.origin_city}</p>
                <img className="mt-2" src={plane} alt="" height="20" />
                <p className="fs-2 fw-bold">{item.destination_city}</p>
              </div>
              <div className="container bg-success rounded-3 text-white p-2 w-50 text-center">
                E-ticket Issued
              </div>
              <div className="board2 mt-4"></div>
              <div className="p-5 row ms-1">
                <div class="col lh-1 mb-5">
                  <p className="text-muted">
                    <small>Passenger</small>
                  </p>
                  <span>{item.passenger_name}</span>
                </div>
                <div class="col lh-1 mb-5">
                  <p className="text-muted">
                    <small>Class</small>
                  </p>
                  <span>{item.class_type}</span>
                </div>

                <div class="w-100"></div>

                <div class="col lh-1 mb-5">
                  <p className="text-muted">
                    <small>Departure</small>
                  </p>
                  <span>{item.departure_date}</span>
                </div>
                <div class="col lh-1 mb-5">
                  <p className="text-muted">
                    <small>Time</small>
                  </p>
                  <span>{item.departure_time}</span>
                </div>

                <div class="w-100"></div>

                <div class="col lh-1 mb-5">
                  <p className="text-muted">
                    <small>Code</small>
                  </p>
                  <span>{item.flight_number}</span>
                </div>
                <div class="col lh-1 mb-5">
                  <p className="text-muted">
                    <small>Terminal</small>
                  </p>
                  <span>{item.terminal}</span>
                </div>

                <div class="w-100"></div>

                <div class="col lh-1">
                  <p className="text-muted">
                    <small>Gate</small>
                  </p>
                  <span>{item.gate}</span>
                </div>
                <div class="col lh-1">
                  <p className="text-muted">
                    <small>Seat</small>
                  </p>
                  <span>{item.seat_number}</span>
                </div>
              </div>
              <div className="board2 mt-1"></div>
              <div className="barcodee text-center my-4">
                <Barcode value={item.flight_number}></Barcode>
              </div>
            </div>
          );
        })}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default BookingDetail;
