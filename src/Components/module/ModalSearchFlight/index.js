/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as IoIosIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import Button from "../../Button";
import Input from "../../Input";
import "./modalsearchflight.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import { SearchFlights } from "../../../Redux/actions/main/searchFlights";

const ModalSearchFlight = () => {
  const dispatch = useDispatch();
  const searchFightsData = useSelector((state) => state.FetchSearchFlights);

  const navigate = useNavigate();
  const [journeys, setJourneys] = useState("");
  const [flightClass, setFlightClass] = useState("");
  const [form, setForm] = useState({
    origin_city: "",
    destination_city: "",
    departure_date: "",
    total_passenger: ""
  });
  const totalPassenger = parseInt(form.total_passenger);
  const searchFlightForm = {
    origin_city: form.origin_city,
    destination_city: form.destination_city,
    journey: journeys,
    departure_date: form.departure_date,
    total_passenger: totalPassenger,
    flight_class: flightClass
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleJourney = (e) => {
    if (e.target.value === "One Way") {
      setJourneys("one_way");
    } else if (e.target.value === "Round Trip") {
      setJourneys("round_trip");
    }
  };
  const handleFlightClasses = (e) => {
    if (e.target.value === "Business") {
      setFlightClass("business");
    } else if (e.target.value === "Economy") {
      setFlightClass("economy");
    } else if (e.target.value === "First Class") {
      setFlightClass("first");
    }
  };
  const toResultPage = () => {
    navigate("/main/search-result", { state: searchFlightForm });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SearchFlights({ searchFlightForm, toResultPage }));
  };

  return (
    <Fragment>
      <div className="modal-search-flight-container animation-pull-down">
        <section className="modal-search-flight-content ">
          <div className="modal-search-flight-text">
            <p className="modal-search-flight-hey title-blacky mb-0">Hey,</p>
            <p className="modal-search-flight-title title-blacky">
              Where you want to go?
            </p>
          </div>
          <div className="modal-search-flight-recently d-flex justify-content-between">
            <p className="recently-text title-bluesclues">Recently Searched</p>
            <IoIosIcons.IoIosArrowForward className="arrow-icon title-blue" />
          </div>

          <form onSubmit={handleSubmit} className="form-section">
            <div className="input-destination-wrapper mt-2">
              <div className="origin d-flex flex-column ms-3">
                <label className="label-text mb-3" htmlFor="origin">
                  From
                </label>
                <Input
                  name="origin_city"
                  value={form.origin_city}
                  onChange={handleChange}
                  className="city-input"
                  type="text"
                  placeholder="city"
                  id="origin"
                />
              </div>

              <div className="ms-1 me-1">
                <RiIcons.RiArrowLeftRightFill className="switch-icon title-bluesclues" />
              </div>

              <div className="destinations d-flex flex-column ms-3 ">
                <label className="label-text mb-3" htmlFor="destinations">
                  To
                </label>
                <Input
                  name="destination_city"
                  value={form.destination_city}
                  onChange={handleChange}
                  className="city-input"
                  type="text"
                  placeholder="city"
                  id="destinations"
                />
              </div>
            </div>

            <div className="input-journey-wrapper">
              <div className="one-way mt-3">
                <FaIcons.FaPlaneDeparture className="journey-icons ms-2 me-2 switch-icon" />
                <Input
                  name="journey"
                  onClick={handleJourney}
                  value="One Way"
                  className="one-way-input title-greys"
                  type="button"
                />
              </div>
              <div className="round-trip mt-3">
                <GiIcons.GiClockwiseRotation className="journey-icons ms-2 me-2 switch-icon" />
                <Input
                  name="journey"
                  onClick={handleJourney}
                  value="Round Trip"
                  className="round-trip-input title-greys"
                  type="button"
                />
              </div>
            </div>

            <div className="input-departure-wrapper">
              <label className="title-young-greys mb-2" htmlFor="departure">
                Departure
              </label>
              <Input
                name="departure_date"
                value={form.departure_date}
                onChange={handleChange}
                className="departure-date-input"
                type="date"
                id="departure"
              />
            </div>

            <div className="input-passenger-wrapper">
              <label className="title-young-greys mb-2" htmlFor="passenger">
                How many person?
              </label>
              <Input
                name="total_passenger"
                value={form.total_passenger}
                onChange={handleChange}
                className="departure-date-input"
                type="number"
                id="passenger"
              />
            </div>

            <div className="input-flight-class-wrapper">
              <label className="title-young-greys mb-2" htmlFor="flight-class">
                Which class do you want?
              </label>
              <div className="d-flex justify-content-between align-items-center">
                <Input
                  name="flight_class"
                  value="Economy"
                  onChange={handleFlightClasses}
                  checked={flightClass === "economy"}
                  type="radio"
                  id="economy"
                  className="flight__class__input"
                />
                <label htmlFor="economy" className="flight-classes">
                  Economy
                </label>

                <Input
                  name="flight_class"
                  value="Business"
                  onChange={handleFlightClasses}
                  checked={flightClass === "business"}
                  type="radio"
                  id="business"
                  className="flight__class__input"
                />
                <label htmlFor="business" className="flight-classes">
                  Business
                </label>

                <Input
                  name="flight_class"
                  value="First Class"
                  onChange={handleFlightClasses}
                  checked={flightClass === "first"}
                  type="radio"
                  id="first_class"
                  className="flight__class__input"
                />
                <label htmlFor="first_class" className="flight-classes">
                  First Class
                </label>
              </div>
            </div>

            <Button className="btn-modal-search-flight title-whitesy ">
              search flight
              <HiIcons.HiOutlineArrowNarrowRight className="switch-icon ms-5" />
            </Button>
          </form>
        </section>
      </div>
    </Fragment>
  );
};

export default ModalSearchFlight;
