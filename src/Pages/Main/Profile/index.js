/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import btnback from "../../../assets/img/btnback.svg";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import Footer from "../../../Components/module/Footer";
import Navbar from "../../../Components/module/Navbar";
import SidebarMobile from "../../../Components/module/SidebarMobile";
import Sidebar from "../../../Components/module/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../Redux/actions/main/updateProfile";
import { getProfile } from "../../../Redux/actions/main/profile";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    phone_number: "",
    fullname: "",
    city: "",
    address: "",
    post_code: ""
  });

  const data = useSelector((state) => state.getProfile);
  // console.log("INI data profile", data);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleContinue = () => {
    dispatch(updateProfile(form));
  };

  return (
    <div className="d-flex flex-column wrapper-home">
      <Navbar></Navbar>
      <SidebarMobile></SidebarMobile>
      <main className="bg-light d-none d-md-block">
        <div className="profile d-flex mb-5 mx-5">
          <Sidebar></Sidebar>
          <div className="mt-5 ms-2 content-profile">
            <p className="txt-blue fw-bold">P R O F I L E</p>
            <h4 className="fw-bold txt-black">Profile</h4>
            <div className="form-input d-flex flex-row">
              <div className="profile-right">
                <h5 className="txt-black fw-bold mb-3">Contact</h5>
                <form className="ms-2">
                  <div className="mb-4 input-contact">
                    <label className="ms-1 txt-label">Email</label>
                    <Input
                      className="input-profile"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={data ? data.email : "-"}
                    />
                  </div>
                  <label className="ms-1 txt-label">Phone Number</label>
                  <Input
                    type="number"
                    className="input-profile"
                    name="phone_number"
                    value={form.phone_number}
                    onChange={handleChange}
                    placeholder={data ? data.phone_number : "-"}
                  />
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
                    <Input
                      className="input-profile"
                      name="fullname"
                      value={form.fullname}
                      onChange={handleChange}
                      placeholder={data ? data.fullname : ""}
                    />
                  </div>
                  <div className="mb-4 input-contact">
                    <label className="ms-1 txt-label">City</label>
                    <Input
                      className="input-profile"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder={data ? data.city : ""}
                    />
                  </div>
                  <div className="mb-4 input-contact">
                    <label className="ms-1 txt-label">Address</label>
                    <Input
                      className="input-profile"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder={data ? data.address : ""}
                    />
                  </div>
                  <div className="input-contact">
                    <label className="ms-1 txt-label">Post Code</label>
                    <Input
                      className="input-profile"
                      name="post_code"
                      value={form.post_code}
                      onChange={handleChange}
                      placeholder={data ? data.post_code : "-"}
                    />
                  </div>
                </form>
                <Button className="btn-save" onClick={handleContinue}>
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
