import React from "react";
import Footer from "../../../Components/module/Footer";
import Navbar from "../../../Components/module/Navbar";

const Notification = () => {
  return (
    <div className="wrapper-home d-flex flex-column">
      <Navbar></Navbar>
      <div className="middle-page">
        <div className="content-middle p-5">
          <p className="txt-blue">NOTICATION</p>
          <div className="title-chat d-flex justify-content-between">
            <h4 className="txt-black fw-bold">Notification</h4>
            <p className="txt-blue me-5 fw-bold">Clear</p>
          </div>
          <div className="box1">
          <div className="box-notif p-3 mt-3">
            <p className="txt-black fw-bold">Congratulations</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima odio maiores voluptates totam, tempora harum animi explicabo amet odit corporis magni obcaecati magnam facilis maxime. Culpa ipsum eos laudantium vero.</p>
            <p className="date">5h ago</p>
          </div>
          <div className="box-notif p-3 mt-3">
            <p className="txt-black fw-bold">Congratulations</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima odio maiores voluptates totam, tempora harum animi explicabo amet odit corporis magni obcaecati magnam facilis maxime. Culpa ipsum eos laudantium vero.</p>
            <p className="date">5h ago</p>
          </div>
          <div className="box-notif p-3 mt-3">
            <p className="txt-black fw-bold">Congratulations</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima odio maiores voluptates totam, tempora harum animi explicabo amet odit corporis magni obcaecati magnam facilis maxime. Culpa ipsum eos laudantium vero.</p>
            <p className="date">5h ago</p>
          </div>
          <div className="box-notif p-3 mt-3">
            <p className="txt-black fw-bold">Congratulations</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima odio maiores voluptates totam, tempora harum animi explicabo amet odit corporis magni obcaecati magnam facilis maxime. Culpa ipsum eos laudantium vero.</p>
            <p className="date">5h ago</p>
          </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Notification;
