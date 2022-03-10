/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import Logo from "../../../assets/img/Logo2.svg";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import ModalSuccess from "../../../Components/module/ModalSuccess";

// redux
import { useSelector, useDispatch } from "react-redux";
import { AuthEmailReset } from "../../../Redux/actions/Auth/authResetPasswordEmail";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const emailResetData = useSelector((state) => state.AuthEmailResetPassword);

  const [form, setFrom] = useState({
    email: ""
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const handleModalSuccess = () => {
    setOpenModalSuccess(!openModalSuccess);
  };

  const handleClick = (e) => {
    dispatch(AuthEmailReset({ form, setErrorMessage, handleModalSuccess }));
  };

  return (
    <Fragment>
      <section className="row col-xl-4 right-section p-xl-5">
        <div className="form">
          <div className="header">
            <img src={Logo} alt="" />
          </div>
          <div className="content">
            <p className="txt-forgot mt-5">Forgot Password</p>
            <Input
              className="input-login pt-4"
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email}
            />
            {errorMessage ? (
              <p className="text-error mb-0">{errorMessage}</p>
            ) : null}
            <Button onClick={handleClick} className="btn-login mt-5">
              Send
            </Button>
            <p className="mt-3">You’ll get message soon on your email</p>
          </div>
        </div>
      </section>

      {openModalSuccess ? (
        <ModalSuccess
          successTitle="Verification Email Sent!"
          successDesc="Please check your email to continue reset your password by click the link we've sent to you."
          action="OK, I got it"
          closeModal={handleModalSuccess}
        />
      ) : null}
    </Fragment>
  );
};

export default ResetPassword;
