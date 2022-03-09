import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as BsIcons from "react-icons/bs";
import Logo from "../../../assets/img/Logo2.svg";
import Google from "../../../assets/img/btnGoogle.svg";
import FB from "../../../assets/img/btnFacebook.svg";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import "./login.css";
import { AuthLogin } from "../../../Redux/actions/Auth/authLogin";

const Login = () => {
  const navigate = useNavigate();
  const [form, setFrom] = useState({
    email: "",
    password: ""
  });

  // const {loading } = useSelector((state) => state.AuthLogin)
  const dispatch = useDispatch();

  const FormAddUser = new FormData();
  FormAddUser.append("email", form.email);
  FormAddUser.append("password", form.password);

  const handleChange = (e) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // console.log("Ini FORM", form);

  const handleClick = () => {
    dispatch(AuthLogin({ form, navigate }));
  };


  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };
  const toIndexPage = () => {
    navigate("/");
  };
  return (
    <Fragment>
      <section className="row col-xl-4 right-section p-xl-4">
        <div className="form">
          <div onClick={toIndexPage} className="header">
            <img src={Logo} alt="" />
          </div>
          <div className="content">
            <p className="title my-3 mt-5">Login</p>
            <Input
              className="input-login"
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email}
            />
            <div>
              <Input
                className="input-login pt-5"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                value={form.password}
              />
              {showPassword ? (
                <BsIcons.BsEye
                  onClick={handleShowPassword}
                  className="form-icons bi-eye-slash position-absolute "
                />
              ) : (
                <BsIcons.BsEyeSlash
                  onClick={handleShowPassword}
                  className="form-icons bi-eye-slash position-absolute"
                />
              )}
            </div>
            <Button className="btn-login mt-5" onClick={handleClick}>Sign In</Button>
            <p className="mt-3 text-center">Did you forgot your password?</p>
            <Link to="/auth/resetpass" className="link">Tap here for reset</Link>
            <hr size="4" />
            <p className="text-center">or sign in with</p>
            <div className="d-flex flex-row">
              <img className="me-2 ps-5 ms-3" src={Google} alt="" />
              <img src={FB} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
