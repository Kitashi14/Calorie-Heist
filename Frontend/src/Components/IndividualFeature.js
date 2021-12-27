import React from "react";

const IndividualFeature = (abc) => {
  return (
    <div>
      <div class="card cardB">
        <img class="card-img-top" src={abc.image} alt="Card cap" />
        <div class="card-body">
          <p class="card-text">{abc.text}</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualFeature;
