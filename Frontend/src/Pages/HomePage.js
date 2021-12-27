import React from "react";
import { Carousel } from "../Components/Carousel";
import { Cards } from "../Components/Cards";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <hr
        style={{
          width: "30vw",
          marginLeft: "35vw",
          marginTop: "45px",
          marginBottom: "40px",
          height: "10px",
          backgroundColor: "orange",
          borderTop: "10px dotted red",
        }}
      />
      <Cards />
      <hr
        style={{
          width: "30vw",
          marginLeft: "35vw",
          marginTop: "45px",
          marginBottom: "40px",
          height: "10px",
          backgroundColor: "orange",
          borderTop: "10px dotted red",
        }}
      />
    </div>
  );
};

export default HomePage;