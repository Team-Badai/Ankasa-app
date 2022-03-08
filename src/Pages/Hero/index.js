/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import Carousel from "react-elastic-carousel";
import Navbar from "../../Components/module/Navbar";
import Footer from "../../Components/module/Footer";
import "./hero.css";
import * as IoIosIcons from "react-icons/io";
import heroVector from "../../assets/hero/hero-vector.svg";
import heroPic1 from "../../assets/hero/hero-pic1.png";
import heroPic2 from "../../assets/hero/hero-pic2.png";
import tokyo from "../../assets/hero/tokyo.png";
import paris from "../../assets/hero/paris.png";
import bali from "../../assets/hero/bali.png";
import barcelona from "../../assets/hero/barcelona.png";
import sydney from "../../assets/hero/sydney.png";
import agra from "../../assets/hero/agra.png";
import singapore from "../../assets/hero/singapore.png";

const Hero = () => {
  const [destinations, setDestinations] = useState([
    {
      id: 1,
      picture: tokyo,
      city: "Tokyo",
      country: "Japan"
    },
    {
      id: 2,
      picture: paris,
      city: "Paris",
      country: "France"
    },
    {
      id: 3,
      picture: bali,
      city: "Bali",
      country: "Indonesia"
    },
    {
      id: 4,
      picture: barcelona,
      city: "Barcelona",
      country: "Spain"
    },
    {
      id: 5,
      picture: sydney,
      city: "Sydney",
      country: "Australia"
    }
  ]);
  return (
    <Fragment>
      <main className="container-fluid d-flex flex-column hero-container">
        <Navbar />
        <section className="hero-section d-flex">
          <div className="hero-section-left d-flex flex-column">
            <div className="hero-section-text-wrapper">
              <h1 className="hero-title">
                Find Your <span className="title-blue">Flight</span>{" "}
              </h1>
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

        <section className="trending-section">
          <div className="trending-text-container d-flex justify-content-between">
            <div className="trending-text-wrapper">
              <p className="trending title-blue">Trending</p>
              <h2 className="trending-title">Trending destinations</h2>
            </div>
            <p className="trending-view-all mb-0 title-blue">View all</p>
          </div>
          <div className="trending-card-wrapper d-flex justify-content-evenly mt-5">
            {/* card start here */}

            {destinations.map((destination, index) => (
              <div key={destination.id} className="trending-card">
                <img
                  className="card-img"
                  src={destination.picture}
                  alt="Tokyo"
                />
                <div className="card-details-container d-flex justify-content-between w-100 ">
                  <div className="card-destinations d-flex flex-column">
                    <p className="card-city-name mb-0">{destination.city},</p>
                    <p className="card-country-name">{destination.country}</p>
                  </div>
                  <div className="arrow-wrapper">
                    <IoIosIcons.IoIosArrowForward className="arrow-icon title-blue" />
                  </div>
                </div>
              </div>
            ))}
            {/* card end here */}
          </div>
        </section>

        <section className="top-destination-section">
          <div className="carousel-destination-wrapper">
            <div className="carousel-destination">
              <div className="destination-text-wrapper">
                <p className="destination title-white ">top 10</p>
                <h2 className="destination-title title-white">
                  Top 10 destinations
                </h2>
              </div>

              <Carousel itemsToShow={5}>
                <div className="carousel-wrapper">
                  <div className="img-destination-wrapper">
                    <img
                      className="img-destination"
                      src={paris}
                      alt="T-shirt"
                    />
                  </div>
                  <p className="img-destination-caption mt-4">paris</p>
                </div>

                <div className="carousel-wrapper">
                  <div className="img-destination-wrapper">
                    <img className="img-destination" src={bali} alt="T-shirt" />
                  </div>
                  <p className="img-destination-caption mt-4">bali</p>
                </div>

                <div className="carousel-wrapper">
                  <div className="img-destination-wrapper">
                    <img
                      className="img-destination"
                      src={singapore}
                      alt="T-shirt"
                    />
                  </div>
                  <p className="img-destination-caption mt-4">singapore</p>
                </div>

                <div className="carousel-wrapper">
                  <div className="img-destination-wrapper">
                    <img className="img-destination" src={agra} alt="T-shirt" />
                  </div>
                  <p className="img-destination-caption mt-4">agra</p>
                </div>

                <div className="carousel-wrapper">
                  <div className="img-destination-wrapper">
                    <img
                      className="img-destination"
                      src={sydney}
                      alt="T-shirt"
                    />
                  </div>
                  <p className="img-destination-caption mt-4">sydney</p>
                </div>

                <div className="carousel-wrapper">
                  <div className="img-destination-wrapper">
                    <img
                      className="img-destination"
                      src={barcelona}
                      alt="T-shirt"
                    />
                  </div>
                  <p className="img-destination-caption mt-4">barcelona</p>
                </div>

                <div className="carousel-wrapper">
                  <div className="img-destination-wrapper">
                    <img
                      className="img-destination"
                      src={tokyo}
                      alt="T-shirt"
                    />
                  </div>
                  <p className="img-destination-caption mt-4">tokyo</p>
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </Fragment>
  );
};

export default Hero;
