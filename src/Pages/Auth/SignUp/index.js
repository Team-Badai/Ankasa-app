import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Logo from "../../../assets/img/Logo2.svg";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import "../auth.css";
import { useDispatch } from "react-redux";
import { AuthSignUp } from "../../../Redux/actions/Auth/authSignUp";

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setFrom] = useState({
    fullname: "",
    email: "",
    password: "",
    requisite: "",
  });

  const FormAddUser = new FormData();
  FormAddUser.append("fullname", form.fullname);
  FormAddUser.append("email", form.email);
  FormAddUser.append("password", form.password);
  FormAddUser.append("equisite", form.requisite);

  const dispatch = useDispatch();
  const [checked, setChecked] = useState("");

  const handleCheckbox = (e) => {
    console.log("CHECKED",e.target.value);
    setChecked(e.target.value)
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthSignUp({ form }));
    console.log("ISI FORM",form);
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
            <form onSubmit={handleSubmit}>
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
                  <BsIcons.BsEye
                    onClick={handleShowPassword}
                    className="form-icons bi-eye-slash position-absolute mt-4"
                  />
                ) : (
                  <BsIcons.BsEyeSlash
                    onClick={handleShowPassword}
                    className="form-icons bi-eye-slash position-absolute mt-4"
                  />
                )}
              </div>
              <Button className="btn-login mt-5" type="submit">
                Sign Up
              </Button>
            </form>
            <div className="bot-action my-3">                
            <Input
                  onChange={handleCheckbox}
                  value='Accept terms and condition'
                  name="checked"
                  className="input-check me-2 mt-2"
                  checked={checked === "Accept terms and condition"}
                  type="checkbox"
                  id="checked"
                />
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
