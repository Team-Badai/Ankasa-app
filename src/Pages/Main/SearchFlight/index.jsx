import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import style from './flight.module.css'

// components
import Navbar from "../../../Components/module/Navbar";
import Footer from "../../../Components/module/Footer";
import BlueBar from "../../../Components/module/BlueBar";
import Card from "../../../Components/module/Card";

const SearchPage = () => {
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
                            1
                        </div>
                        <div className={`${style['combine-side']} d-flex flex-fill flex-column ms-3`}>
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default SearchPage