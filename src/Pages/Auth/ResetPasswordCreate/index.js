/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../../assets/img/Logo2.svg";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import * as BsIcons from "react-icons/bs";
import ModalSuccess from "../../../Components/module/ModalSuccess";

// redux
import { useSelector, useDispatch } from "react-redux";
import { AuthResetPassword } from "../../../Redux/actions/Auth/authResetPassword";

const ResetPasswordCreate = () => {
  const dispatch = useDispatch();
  const resetPassData = useSelector((state) => state.AuthResetPassword);

  const { token } = useParams();
  const tokenReset = token;
  const navigate = useNavigate();
  const [form, setFrom] = useState({
    password: "",
    confirmPassword: ""
  });
  const handleChange = (e) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const handleModalSuccess = () => {
    setOpenModalSuccess(!openModalSuccess);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  const handleClick = () => {
    dispatch(
      AuthResetPassword({
        form,
        setErrorMessage,
        handleModalSuccess,
        tokenReset
      })
    );
  };

  const toLoginPage = () => {
    navigate("/auth/login", { replace: true });
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
            <div>
              <Input
                className="input-login pt-4"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                value={form.password}
              />
              {showPassword ? (
                <BsIcons.BsEye
                  onClick={handleShowPassword}
                  className="form-icons eye-signup position-absolute"
                />
              ) : (
                <BsIcons.BsEyeSlash
                  onClick={handleShowPassword}
                  className="form-icons eye-signup position-absolute"
                />
              )}
            </div>
            <div>
              <Input
                className="input-login pt-4"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                onChange={handleChange}
                value={form.confirmPassword}
              />
              {showPassword ? (
                <BsIcons.BsEye
                  onClick={handleShowPassword}
                  className="form-icons eye-signup position-absolute"
                />
              ) : (
                <BsIcons.BsEyeSlash
                  onClick={handleShowPassword}
                  className="form-icons eye-signup position-absolute"
                />
              )}
            </div>

            {errorMessage ? (
              <p className="text-error mb-0">{errorMessage}</p>
            ) : null}
            <Button onClick={handleClick} className="btn-login mt-5">
              Send
            </Button>
            <p className="mt-3">Create new password.</p>
          </div>
        </div>
      </section>

      {openModalSuccess ? (
        <ModalSuccess
          successTitle="Reset Password Success!"
          successDesc="Your password has been changed. Now you can login to your account."
          action="Login Now"
          closeModal={toLoginPage}
        />
      ) : null}
    </Fragment>
  );
};

export default ResetPasswordCreate;
