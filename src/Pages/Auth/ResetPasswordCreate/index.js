import React, { Fragment, useState } from "react";
import Logo from "../../../assets/img/Logo2.svg";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import * as BsIcons from "react-icons/bs";

const ResetPasswordCreate = () => {
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

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
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
            <Button className="btn-login mt-5">Send</Button>
            <p className="mt-3">Create new password.</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ResetPasswordCreate;
