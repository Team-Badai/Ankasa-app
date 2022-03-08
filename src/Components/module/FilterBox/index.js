import React, { useState } from "react";
import ArrowUp from "../../../assets/img/arrow-up.svg";
import Input from "../../Input";
import "./filter.css";
import {Slider} from '@material-ui/core'

const FilterBox = () => {

    const [val, setVal] = useState([30,40])
    const updateRange = (e, data) =>{
        setVal(data)
    }

  return (
    <div className="filter-box p-4">
      <div className="transit d-flex justify-content-between">
        <h6 className="fw-bold">Transit</h6>
        <img src={ArrowUp} alt="" />
      </div>
      <div className="transit d-flex justify-content-between mt-3">
        <p className="txt-filter">Direct</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <div className="transit d-flex justify-content-between">
        <p className="txt-filter">Transit</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <div className="transit d-flex justify-content-between">
        <p className="txt-filter">Transit 2+</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <hr size="4" />
      {/* --------------------------------------- GANTI BARIS BUAT FACILITIES ------------------------------------------- */}
      <div className="transit d-flex justify-content-between">
        <h6 className="fw-bold">Facilities</h6>
        <img src={ArrowUp} alt="" />
      </div>
      <div className="transit d-flex justify-content-between mt-3">
        <p className="txt-filter">Luggage</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <div className="transit d-flex justify-content-between">
        <p className="txt-filter">In-Flight Meal</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <div className="transit d-flex justify-content-between">
        <p className="txt-filter">Wi-fi</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <hr size="4" />
      {/* --------------------------------------- GANTI BARIS BUAT DEPATURE TIME ------------------------------------------- */}
      <div className="transit d-flex justify-content-between">
        <h6 className="fw-bold">Departure Time</h6>
        <img src={ArrowUp} alt="" />
      </div>
      <div className="transit d-flex justify-content-between mt-3">
        <p className="txt-filter">00.00 - 06.00</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <div className="transit d-flex justify-content-between">
        <p className="txt-filter">06.00 - 12.00</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <div className="transit d-flex justify-content-between">
        <p className="txt-filter">12.00 - 18.00</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <div className="transit d-flex justify-content-between">
        <p className="txt-filter">18.00 - 24.00</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <hr size="4" />
      {/* --------------------------------------- GANTI BARIS BUAT TIME ARRIVED ------------------------------------------- */}
      <div className="transit d-flex justify-content-between">
        <h6 className="fw-bold">Time Arrived</h6>
        <img src={ArrowUp} alt="" />
      </div>
      <div className="transit d-flex justify-content-between mt-3">
        <p className="txt-filter">00.00 - 06.00</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <div className="transit d-flex justify-content-between">
        <p className="txt-filter">06.00 - 12.00</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <div className="transit d-flex justify-content-between">
        <p className="txt-filter">12.00 - 18.00</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <div className="transit d-flex justify-content-between">
        <p className="txt-filter">18.00 - 24.00</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <hr size="4" />
      {/* --------------------------------------- GANTI BARIS BUAT TIME ARRIVED ------------------------------------------- */}
      <div className="transit d-flex justify-content-between">
        <h6 className="fw-bold">Airlines</h6>
        <img src={ArrowUp} alt="" />
      </div>
      <div className="transit d-flex justify-content-between mt-3">
        <p className="txt-filter">Garuda Indonesia</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <div className="transit d-flex justify-content-between">
        <p className="txt-filter">Air Asia</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <div className="transit d-flex justify-content-between">
        <p className="txt-filter">Lion Air</p>
        <Input className="me-1 mt-1" type="checkbox" id="check" />
      </div>
      <hr size="4" />
      {/* --------------------------------------- GANTI BARIS BUAT TIME ARRIVED ------------------------------------------- */}
      <div className="transit d-flex justify-content-between">
        <h6 className="fw-bold">Ticket Price</h6>
        <img src={ArrowUp} alt="" />
      </div>
      <div className="range" >
          <div className="d-flex justify-content-between mt-3">
              <p className="txt-range">Lowest</p>
              <p className="txt-range">Highest</p>
          </div>
          <Slider value={val} onChange={updateRange}/>
          <div className="d-flex justify-content-between mt-3">
              <h6 className="txt-blue fw-bold">$ 145,00</h6>
              <h6 className="txt-blue fw-bold">$ 300,00</h6>
          </div>
      </div>
    </div>
  );
};

export default FilterBox;
