import React from "react";
import { Link } from "react-router-dom";
import btnback from "../../../assets/img/btnback.svg"
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import Footer from "../../../Components/module/Footer";
import Navbar from "../../../Components/module/Navbar";

const Profile = () => {
  return (
    <div className="d-flex flex-column wrapper-home">
      <Navbar></Navbar>
      <div className="profile d-flex flex-row">
        <div className="content-profile">
          <p className="txt-blue">PROFILE</p>
          <h4 className="fw-bold txt-black">Profile</h4>
          <div className="form-input d-flex flex-row">
            <div className="profile-right">
              <h5 className="txt-black fw-bold mb-3">Contact</h5>
              <form className="ms-2">
                <div className="mb-4 input-contact">
                  <label className="ms-1 txt-label">email</label>
                  <Input type="email" className="input-profile" />
                </div>
                <label className="ms-1 txt-label">phone number</label>
                <Input type="number" className="input-profile" />
              </form>
              <div className="link-txt">
                <Link to="" className="link-txt me-4">
                  Account Settings
                </Link>
                <img src={btnback} alt="" />
              </div>
            </div>
            <div className="profile-left">
              <h5 className="txt-black fw-bold mb-3">Biodata</h5>
              <form className="ms-2">
                <div className="mb-4 input-contact">
                  <label className="ms-1 txt-label">Username</label>
                  <Input className="input-profile" />
                </div>
                <div className="mb-4 input-contact">
                  <label className="ms-1 txt-label">City</label>
                  <Input className="input-profile" />
                </div>
                <div className="mb-4 input-contact">
                  <label className="ms-1 txt-label">Addres</label>
                  <Input className="input-profile" />
                </div>
                <div className="input-contact">
                  <label className="ms-1 txt-label">Post Code</label>
                  <Input className="input-profile" />
                </div>
              </form>
              <Button className="btn-save">Save</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
