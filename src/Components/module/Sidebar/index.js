/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import pic from '../../../assets/img/nnzkZNYWHaU.svg'
import Button from "../../../Components/Button";
import "../../../Pages/Main/main.css";
import user from "../../../assets/img/user.svg";
import review from "../../../assets/img/Vector.svg";
import settings from "../../../assets/img/Vector (1).svg";
import logout from "../../../assets/img/Vector (2).svg";
import blankProfile from "../../../assets/img/blank-profile-picture.png";
import { changePicture } from "../../../Redux/actions/main/changePicture";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../Redux/actions/main/user";
import ModalAlert from "../ModalAlert";
import * as AiIcons from "react-icons/ai";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.FetchUser);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const [form, setForm] = useState({
    profile_picture: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      profile_picture: e.target.files[0]
    });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile_picture", form.profile_picture);
    dispatch(changePicture(formData));
    navigate("/");
  };

  const [modalPic, setModalPic] = useState(false);

  const openModal = () => {
    if (modalPic === false) {
      setModalPic(true);
    } else {
      setModalPic(false);
    }
  };

  const [openModalAlert, setOpenModalAlert] = useState(false);

  const handleModalAlert = () => {
    setOpenModalAlert(!openModalAlert);
  };

  return (
    <div className="d-none d-md-flex flex-column p-3 me-3 ms-5 rounded mt-5 w-25 bg-white">
      <div className="text-center d-flex flex-column align-items-center">
        <img
          className="rounded-pill border-primary border border-2 p-1"
          src={
            data.data.profile_picture ? data.data.profile_picture : blankProfile
          }
          alt="Profile"
          height="100"
        />
        <Button
          className="btn-sign bg-white border-primary border rounded-3 p-2 text-primary mt-4 fw-bolder"
          onClick={() => openModal()}
        >
          Select Photo
        </Button>
        <p className="mt-4 fw-bolder mb-0 fs-5">{data.data.fullname}</p>
        <span className="text-secondary">{data.data.address}</span>
      </div>
      <div className="d-flex flex-column mt-4">
        <div className="d-flex justify-content-between">
          <p className="fw-bold">Cards</p>
          <p className="text-primary fw-bold cursor">+ Add</p>
        </div>
        <div className="container p-3 border rounded bg-primary text-white shadow">
          <p className="mb-0 fw-bold">6816392372132</p>
          <div className="d-flex justify-content-between">
            <span className="">X card</span>
            <span className="">Rp500000</span>
          </div>
        </div>
        <div className="menu ms-3 mt-5">
          <div className="">
            <div
              className="icon mb-4 text-dark text-decoration-none cursor"
              onClick={() => {
                navigate("/main/profile");
              }}
            >
              <img
                className="border-primary border rounded-pill"
                src={user}
                alt=""
              />
              <span className="ms-4 text-primary fw-bold">Profile</span>
            </div>
          </div>
          <div className="my-4">
            <div className="icon text-dark text-decoration-none cursor">
              <img src={review} alt="" />
              <span className="ms-4 fw-bold">My Review</span>
            </div>
          </div>
          <div className="my-4">
            <div className="icon text-dark my-4 text-decoration-none cursor">
              <img src={settings} alt="" />
              <span className="ms-4 fw-bold">Settings</span>
            </div>
          </div>
          <div className="my-4">
            <div
              className="icon text-dark text-decoration-none cursor"
              onClick={handleModalAlert}
            >
              <img src={logout} alt="" />
              <span className="ms-4 text-danger fw-bold">Log Out</span>
            </div>
          </div>
        </div>
      </div>
      {modalPic === true ? (
        <div className="modals">
          <div className="modal-content p-4">
            <div className="d-flex justify-content-between">
              <h5 className="fw-bold mt-3">Change Profile Picture</h5>
              <Button
                className="btn-close"
                onClick={() => openModal(false)}
              ></Button>
            </div>
            <p className="fw-lighter mt-2">
              Choose the picture and then <br></br>
              press continue to the next steps.
            </p>
            <form
              encType="multipart/form-data"
              onSubmit={handleContinue}
              className="d-flex flex-column"
            >
              <input
                type="file"
                name="file"
                id="file"
                onChange={handleChange}
              />
              {form.profile_picture ? (
                <img
                  className="mt-3"
                  src={URL.createObjectURL(form.profile_picture)}
                  alt=""
                  height="80"
                  width="80"
                />
              ) : (
                ""
              )}
              <Button
                className="btn bg-primary text-white mt-4 p-2 border-0 mb-3 w-100"
                type="submit"
              >
                Continue
              </Button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}

      {openModalAlert ? (
        <ModalAlert
          alertIcon={<AiIcons.AiOutlineLogout />}
          alertTitle="Log Out Account?"
          alertDesc="Are you sure you want to log out from Ankasa? Save all your changes before logout."
          action="Log Out"
          closeModal={handleModalAlert}
          handleAction={handleLogout}
        />
      ) : null}
    </div>
  );
};

export default Sidebar;
