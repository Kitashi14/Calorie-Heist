import React from "react";
import IndividualItem from "../Components/IndividualItem";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      {/* Search Button */}
      <div className="blackground">
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Search"
        />
      </div>
      {/* Individual Items */}
      <div className="MainPage-item-div">
        <div className="mainpage-item-display">
          <IndividualItem />
        </div>
        {/* Recommended Items */}
        <div className="mainpage-item-display">
          <IndividualItem />
        </div>
      </div>
    </>
  );
};

export default MainPage;
