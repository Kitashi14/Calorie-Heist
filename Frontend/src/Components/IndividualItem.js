import React from "react";
import "./IndividualItem.css";
import image1 from "./../Images/burger.jpg";
import image2 from "./../Images/pizza.jpg";
import image3 from "./../Images/fries.jpg";
import image4 from "./../Images/salmon.jpg";
import image5 from "./../Images/biryani.jpg";
import image6 from "./../Images/vanilla.jpg";

//For Individual Item Cards in the HomePage
const IndividualItem = (props) => {
  return (
    <>
      {" "}
      {/* Burger Item Card */}
      <div className="item-card">
        <img className="item-image" src={image1} alt="Avatar" />
        <div className="container">
          <b className="item-card-title">Burger </b>
          {props.fav ? (
            <i class="fas fa-heart item-card-fav-icon"></i>
          ) : (
            <i class="far fa-heart item-card-fav-icon"></i>
          )}
        </div>
        <div className="container">
          <p className="item-card-text">Calories: 80</p>
        </div>
      </div>
      {/* Pizza Item Card */}
      <div className="item-card">
        <img className="item-image" src={image2} alt="Avatar" />
        <div className="container">
          <b className="item-card-title">Pizza </b>
          {props.fav ? (
            <i class="fas fa-heart item-card-fav-icon"></i>
          ) : (
            <i class="far fa-heart item-card-fav-icon"></i>
          )}
        </div>
        <div className="container">
          <p className="item-card-text">Calories: 100</p>
        </div>
      </div>
      {/* French Fries Item Card */}
      <div className="item-card">
        <img className="item-image" src={image3} alt="Avatar" />
        <div className="container">
          <b className="item-card-title">French Fries </b>
          {props.fav ? (
            <i class="fas fa-heart item-card-fav-icon"></i>
          ) : (
            <i class="far fa-heart item-card-fav-icon"></i>
          )}
        </div>
        <div className="container">
          <p className="item-card-text">Calories: 40</p>
        </div>
      </div>
      {/* Salmon Item Card */}
      <div className="item-card">
        <img className="item-image" src={image4} alt="Avatar" />
        <div className="container">
          <b className="item-card-title">Grilled Salmon </b>
          {props.fav ? (
            <i class="fas fa-heart item-card-fav-icon"></i>
          ) : (
            <i class="far fa-heart item-card-fav-icon"></i>
          )}
        </div>
        <div className="container">
          <p className="item-card-text">Calories: 60</p>
        </div>
      </div>
      {/* Chicken Biryani Item Card */}
      <div className="item-card">
        <img className="item-image" src={image5} alt="Avatar" />
        <div className="container">
          <b className="item-card-title">Chicken Biryani </b>
          {props.fav ? (
            <i class="fas fa-heart item-card-fav-icon"></i>
          ) : (
            <i class="far fa-heart item-card-fav-icon"></i>
          )}
        </div>
        <div className="container">
          <p className="item-card-text">Calories: 120</p>
        </div>
      </div>
      {/* Vanilla Ice Cream Item Card */}
      <div className="item-card">
        <img className="item-image" src={image6} alt="Avatar" />
        <div className="container">
          <b className="item-card-title">Vanilla Ice Cream </b>
          {props.fav ? (
            <i class="fas fa-heart item-card-fav-icon"></i>
          ) : (
            <i class="far fa-heart item-card-fav-icon"></i>
          )}
        </div>
        <div className="container">
          <p className="item-card-text">Calories: 40</p>
        </div>
      </div>
    </>
  );
};

export default IndividualItem;
