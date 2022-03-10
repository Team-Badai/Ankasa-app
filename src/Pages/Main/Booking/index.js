/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../Components/module/Navbar";
import Footer from "../../../Components/module/Footer";
import Sidebar from "../../../Components/module/Sidebar";
import plane from ".././../../assets/img/plane.svg";
import { useDispatch, useSelector } from "react-redux";
import { getMyBookings } from "../../../Redux/actions/main/booking";
import ModalAlertv2 from "../../../Components/module/ModalAlertv2";

const Booking = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const [tempData, setTempData] = useState("");
  const [tempFlight, setTempFlight] = useState("");
  const data = useSelector((state) => state.FetchMyBookings);

  const toPaymentPage = () => {
    navigate(
      "/main/payment",
      { state: { id_bookings: tempData, id_flights: tempFlight } },
      { replace: true }
    );
  };

  useEffect(() => {
    dispatch(getMyBookings());
  }, []);

  const [openModalAlert, setOpenModalAlert] = useState(false);
  const handleModalAlert = () => {
    setOpenModalAlert(!openModalAlert);
  };

  return (
    <div className="d-flex flex-column">
      <Navbar></Navbar>
      {/* Responsive */}
      <section class="container bg-white p-4 ms-2 mt-4 rounded d-md-none">
        <p className="fw-bold text-primary">
          M Y <span className="ms-2">B O O K I N G</span>
        </p>
        <div className="d-flex justify-content-between">
          <span className="fw-bold fs-5">My Booking</span>
          <span className="text-primary fw-bold">Order History</span>
        </div>
      </section>
      {data.data.map((item) => {
        return (
          <section class=" bg-white p-4 mx-5 rounded mt-4 d-md-none wave">
            <p class="">{item.booking_details[0].created_at}</p>
            <div className="d-flex">
              <p className="fw-bold fs-5">
                {item.flight_details[0].origin_city}
              </p>
              <img className="mx-4 mt-1" src={plane} alt="" height="20" />
              <p className="fw-bold fs-5">
                {item.flight_details[0].destination_city}
              </p>
            </div>
            <p className="text-secondary">
              {item.flight_details[0].airline_name},{" "}
              {item.flight_details[0].flight_number}
            </p>
            <div className="border-bottom border-dark"></div>
            <div className="d-flex justify-content-between mt-4">
              <p className="fw-bold text-secondary">Status</p>
              <div
                className={
                  `${item.booking_details[0].payment_status}` === "paid"
                    ? "status-payment-paid rounded-3 text-white p-2 mx-5 text-center d-md-none"
                    : "status-payment-waiting rounded-3 text-white p-2 mx-5 text-center d-md-none"
                }
              >
                {item.booking_details[0].payment_status === "paid"
                  ? "eticket issued"
                  : item.booking_details[0].payment_status}
              </div>
            </div>
            <p
              className="text-primary fw-bold cursor flex-fill mb-5"
              onClick={() => {
                setTempData(item.booking_details[0].id);
                setTempFlight(item.flight_details[0].id);
                const ticketData = {
                  id_booking: item.booking_details[0].id,
                  airline_name: item.flight_details[0].airline_name
                };
                if (item.booking_details[0].payment_status === "paid") {
                  navigate(
                    "/main/booking-detail",
                    { state: ticketData },
                    { replace: true }
                  );
                } else {
                  handleModalAlert();
                }
              }}
            >
              View Details
            </p>
          </section>
        );
      })}
      <main class="flex-fill bg-light d-none d-md-block">
        <div class="d-flex mb-5 mx-5">
          <Sidebar></Sidebar>
          <div class="mt-5 d-flex flex-column flex-fill">
            <section class="container bg-white p-4 ms-2 rounded d-md-block">
              <p className="fw-bold text-primary">
                M Y <span className="ms-2">B O O K I N G</span>
              </p>
              <div className="d-flex justify-content-between">
                <span className="fw-bold fs-5">My Booking</span>
                <span className="text-primary fw-bold">Order History</span>
              </div>
            </section>
            {data?.data.map((item, index) => {
              return (
                <section
                  key={index}
                  class="container bg-white p-4 ms-2 rounded mt-4"
                >
                  <p class="">{item.booking_details[0].created_at}</p>
                  <div className="d-flex">
                    <p className="fw-bold fs-5">
                      {item.flight_details[0].origin_city}
                    </p>
                    <img className="mx-4 mt-1" src={plane} alt="" height="20" />
                    <p className="fw-bold fs-5">
                      {item.flight_details[0].destination_city}
                    </p>
                  </div>
                  <p className="text-secondary">
                    {item.flight_details[0].airline_name},{" "}
                    {item.flight_details[0].flight_number}
                  </p>
                  <div className="border-bottom"></div>
                  <div className="d-flex justify-content-between mt-4">
                    <p className="fw-bold text-secondary">Status</p>
                    <div
                      className={
                        `${item.booking_details[0].payment_status}` === "paid"
                          ? "status-payment-paid rounded-3 text-white p-2 mx-5 w-25 text-center d-none d-md-block"
                          : "status-payment-waiting rounded-3 text-white p-2 mx-5 w-25 text-center d-none d-md-block"
                      }
                    >
                      {item.booking_details[0].payment_status === "paid"
                        ? "eticket issued"
                        : item.booking_details[0].payment_status}
                    </div>
                    <p
                      className="text-primary fw-bold cursor flex-fill text-end d-none d-md-block"
                      onClick={() => {
                        setTempData(item.booking_details[0].id);
                        setTempFlight(item.flight_details[0].id);
                        const ticketData = {
                          id_booking: item.booking_details[0].id,
                          airline_name: item.flight_details[0].airline_name
                        };
                        if (item.booking_details[0].payment_status === "paid") {
                          navigate(
                            "/main/booking-detail",
                            { state: ticketData },
                            { replace: true }
                          );
                        } else {
                          handleModalAlert();
                        }
                      }}
                    >
                      View Details
                    </p>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>
      <Footer></Footer>

      {openModalAlert ? (
        <ModalAlertv2
          alertv2Title="Confirm Your Payment!"
          alertv2Desc="You need to confirm your payment to see your Booking Pass. Want to confirm your payment now?"
          action1="Yes, pay now"
          action2="Later"
          closeModal={handleModalAlert}
          handleAction={toPaymentPage}
        />
      ) : null}
    </div>
  );
};

export default Booking;
