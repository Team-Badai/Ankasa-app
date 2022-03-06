import React, { Fragment } from "react";
import Navbar from "../../Components/module/Navbar";
import Footer from "../../Components/module/Footer";
import "./hero.css";
import heroVector from "../../assets/hero/hero-vector.svg";
import heroPic1 from "../../assets/hero/hero-pic1.png";
import heroPic2 from "../../assets/hero/hero-pic2.png";

const Hero = () => {
  return (
    <Fragment>
      <main className="container-fluid d-flex flex-column hero-container">
        <Navbar />
        <section className="hero-section d-flex">
          <div className="hero-section-left d-flex flex-column">
            <div className="hero-section-text">
              <h1 className="hero-title">Find Your Flight</h1>
              <p className="hero-subtitle">and explore the world with us</p>
            </div>

            <div className="hero-section-picture-one">
              <img src={heroPic1} alt="HeroPicture1" />
            </div>
          </div>
          <div className="hero-section-right d-flex flex-column">
            <div className="hero-section-picture-two">
              <img className="hero-pic-2" src={heroPic2} alt="HeroPicture2" />
            </div>

            <div className="vector-wrapper">
              <img src={heroVector} alt="HeroVector" />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </Fragment>
  );
};

export default Hero;
