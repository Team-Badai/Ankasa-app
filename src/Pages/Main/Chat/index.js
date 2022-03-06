import React from "react";
import Footer from "../../../Components/module/Footer";
import Navbar from "../../../Components/module/Navbar";
import Kevin from "../../../assets/img/Kevin.svg"

const Chat = () => {
  return (
    <div className="wrapper-home d-flex flex-column">
      <Navbar></Navbar>
      <div className="middle-page">
        <div className="content-middle p-3 d-flex flex-column">
          <p className="txt-blue">CHAT</p>
          <div className="title-chat d-flex justify-content-between">
            <h4 className="txt-black fw-bold">Chat</h4>
            <p className="txt-blue me-5 fw-bold">Filter</p>
          </div>
          <div className="user-chat mt-5">
              <div className="d-flex flex-row w-50">
              <img className="mx-2 mb-2" src={Kevin} alt="" />
              <p className="fw-bold mt-1">Saham Henry<br /><p className="fw-normal mt-2">Me: Bro, just fuck off</p></p>
              </div>
              <div>08.30</div>             
          </div>
          <div className="user-chat mt-4">
              <div className="d-flex flex-row w-50">
              <img className="mx-2 mb-2" src={Kevin} alt="" />
              <p className="fw-bold mt-1">Saham Henry<br /><p className="fw-normal mt-2">Me: Bro, just fuck off</p></p>
              </div>
              <div>08.30</div>             
          </div>
          <div className="user-chat mt-4">
              <div className="d-flex flex-row w-50">
              <img className="mx-2 mb-2" src={Kevin} alt="" />
              <p className="fw-bold mt-1">Saham Henry<br /><p className="fw-normal mt-2">Me: Bro, just fuck off</p></p>
              </div>
              <div>08.30</div>             
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Chat;
