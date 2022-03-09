import React, { Fragment } from "react";
import "./404.css";
import notFound from "../../assets/img/not-found-page.jpg";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
// <a href='https://www.freepik.com/vectors/website'>Website vector created by storyset - www.freepik.com</a>

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="not-found-container mt-4 d-flex flex-column justify-content-center align-items-center">
        <h1 className="code title-blue  mb-1">404</h1>
        <h2 className="code-status title-blue mb-1">Page Not Found</h2>
        <div className="not-found-wrapper">
          <img src={notFound} alt="NotFound" width={453} />
        </div>

        <Button
          onClick={() => navigate("/")}
          className="btn btn-primary ps-5 pe-5 pt-2 pb-2"
        >
          Go Back
        </Button>
      </div>
    </Fragment>
  );
};

export default Page404;
