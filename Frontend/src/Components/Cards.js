import React from "react";
import image1 from "./../Images/graph.png";
import "./Cards.css";
import IndividualFeature from "./IndividualFeature";

export const Cards = (abc) => {
  
  

  return (
    <div class="card-main">
      <IndividualFeature
        image={image1}
        text={
          "We can graphically show the calories you've consumed so that you have a better idea on your diet plan1"
        }
      />
      <IndividualFeature
        image={image1}
        text={
          "We can graphically show the calories you've consumed so that you have a better idea on your diet plan2"
        }
      />
      <IndividualFeature
        image={image1}
        text={
          "We can graphically show the calories you've consumed so that you have a better idea on your diet plan3"
        }
      />
      <IndividualFeature
        image={image1}
        text={
          "We can graphically show the calories you've consumed so that you have a better idea on your diet plan4"
        }
      />
      <IndividualFeature
        image={image1}
        text={
          "We can graphically show the calories you've consumed so that you have a better idea on your diet plan5"
        }
      />
      <IndividualFeature
        image={image1}
        text={
          "We can graphically show the calories you've consumed so that you have a better idea on your diet plan6"
        }
      />
    </div>
  );
};
