import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Logo from "../../../assets/img/Logo2.svg";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import "../auth.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setFrom] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  const handleClick = () => {
    navigate("/auth/login");
  };

  return (
    <Fragment>
      <section className="row col-xl-4 right-section p-xl-5">
        <div className="form">
          <div className="header">
            <img src={Logo} alt="" />
          </div>
          <div className="content">
            <p className="title ms-xl-5">Register</p>
            <Input
              className="input-login"
              placeholder="Fullname"
              type="text"
              name="fullname"
              onChange={handleChange}
              value={form.fullname}
            />
            <Input
              className="input-login pt-4"
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email}
            />
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
                < BsIcons.BsEye
                  onClick={handleShowPassword}
                  className="form-icons bi-eye-slash position-absolute"
                />
              ) : (
                <BsIcons.BsEyeSlash
                  onClick={handleShowPassword}
                  className="form-icons bi-eye-slash position-absolute"
                />
              )}
            </div>
            <Button className="btn-login mt-5">Sign Up</Button>
            <div className="bot-action my-3">
              <Input className="input-check me-2 mt-2" type="checkbox" id="check" />
              <label>Accept terms and condition</label>
            </div>
            <hr size="4" />
            <p>Already have an account?</p>
            <Button className="btn-signin" onClick={handleClick}>
              Sign In
            </Button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SignUp;
