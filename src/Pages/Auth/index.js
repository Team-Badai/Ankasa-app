import React, { Fragment } from "react";
import { Outlet, Navigate } from "react-router-dom";
import "./auth.css";
import Plane from "../../assets/img/plane.png";

const Auth = () => {
  let token = localStorage.getItem("token");
  if (token) {
    return <Navigate to={"/"} />;
  }
  return (
    <Fragment>
      <main className="container-fluid row g-0 d-flex auth-container">
        <section className="left-section col-xl-8 d-xl-block d-md-block d-lg-block d-none">
          <img src={Plane} alt="" className="display-app" />
        </section>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Auth;
