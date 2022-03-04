import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/Logo2.svg";
import Google from "../../../assets/img/btnGoogle.svg";
import FB from "../../../assets/img/btnFacebook.svg";
import FP from "../../../assets/img/fingerprint.svg"
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import "./login.css";

const Login = () => {
    const [form, setFrom] = useState({
        username: "",
        password: "",
      });
      const handleChange = (e) => {
        setFrom({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
  return (
    <Fragment>
      <section className="right-section p-5">
        <div className="header">
          <img src={Logo} alt="" />
        </div>
        <div className="content">
          <p className="title">Login</p>
          <Input 
            className="input-login" 
            placeholder="Username" 
            type="text" 
            name="username"
            onChange={handleChange}
            value={form.username}
          />
          <Input
            className="input-login pt-5"
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
          <Button className="btn-login mt-5">Sign In</Button>
          <p className="mt-3">Did you forgot your password?</p>
          <Link to="/auth/resetpass">Tap here for reset</Link>
          <hr size="4" />
          <p>or sign in with</p>
          <div className="d-flex flex-row">
            <img className="me-2" src={Google} alt="" />
            <img src={FB} alt="" />
            <img src={FP} alt="" className="d-block d-xl-none ms-2"/>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
