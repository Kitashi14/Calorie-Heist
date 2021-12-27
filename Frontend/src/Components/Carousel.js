import React from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";

export const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item carousel-item1 active center">
            <h1 className="Text1 center">Be Ready for a New Lifestyle!</h1>
            <br />
            <Link to="/login" class="btn btn-light" exact>
              Let's Start
            </Link>
          </div>
          {/* <button type="button" class="btn btn-light">Light</button> */}
          <div className="carousel-item carousel-item2">
            {/* <img className="d-block w-100" src={image2} alt="First slide" /> */}
          </div>
          <div className="carousel-item carousel-item3">
            {/* <img className="d-block w-100" src={image3} alt="First slide" /> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <br /> */}
    </div>
  );
};
