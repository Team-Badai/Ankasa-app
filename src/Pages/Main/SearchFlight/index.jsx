import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import style from './flight.module.css'

// components
import Navbar from "../../../Components/module/Navbar";
import Footer from "../../../Components/module/Footer";
import BlueBar from "../../../Components/module/BlueBar";
import Card from "../../../Components/module/Card";
import FilterBox from "../../../Components/module/FilterBox";

const SearchPage = () => {
    const [selectedIdFlight, setSelectedIdFlight] = useState('')
    const listFlights = useSelector((state) => state.FetchSearchFlights)
    const flightsData = listFlights.data;
    const navigate = useNavigate();
    const { state } = useLocation();
    return (
        <div className={`${style.main} d-flex flex-column`}>
            <Navbar />
            <BlueBar />
                <div className="container h-100 d-flex flex-column my-4">
                    <div className={`${style['top-container']} d-flex flex-row mb-3`}>
                        <div className={`${style['left-side']} d-flex me-3 justify-content-between align-items-center`}>
                            <div className={`${style['font-24']}`}>
                                Filter
                            </div>
                            <div className={`${style['font-16']} ${style.primary}`}>
                                Reset
                            </div>
                        </div>
                        <div className={`${style['middle-side']} d-flex ms-3 justify-content-between align-items-center`}>
                            <div className="col d-flex align-items-center">
                                <div className={`${style['font-24']} me-2`}>
                                    Select Ticket
                                </div>
                                <div className={`${style['font-16']} ${style.grey}`}>
                                    (6 flights found)
                                </div>
                            </div>
                        </div>
                        <div className={`${style['right-side']} d-flex justify-content-end align-items-center`}>
                            <div className={`${style['font-16']} d-flex`}>
                                Sort by
                            </div>
                        </div>
                    </div>
                    <div className={`${style["content-wrapper"]} d-flex`}>
                        <div className={`${style['left-side']} d-flex me-3`}>
                            <FilterBox/>
                        </div>
                        <div className={`${style['combine-side']} d-flex flex-fill flex-column ms-3`}>
                            {
                                flightsData.map((flight, index) => {
                                    return <Card key={index} id_flights={flight.id} airline_name={flight.airline_name}
                                    origin_city={flight.origin_city} destination_city={flight.destination_city}
                                    departure_time={flight.departure_time} arrival_time={flight.arrival_time}
                                    duration_time={flight.flight_duration} luggage={flight.luggage} meal={flight.meal}
                                    wifi={flight.wifi} transit={flight.transit_type} price={flight.price}
                                    handleClick={() => {
                                        const selectedFlight = {
                                            id_flights : flight.id,
                                            total_seats : state.total_passenger,
                                            class_type : state.flight_class,
                                        }
                                        navigate('/create-booking', { state: selectedFlight })
                                    }} />
                                })
                            }
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default SearchPage