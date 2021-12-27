import React from "react";
import "./ProfilePage.css";
import image from "./../Images/food2.png";

const ProfilePage = () => {
  return (
    <>
      <div>
        {/* Profile Card  */}
        <div class="profilepage-main">
          <div class="profile-col">
            <div className="profile-card">
              {/* Image in Profile Card  */}
              <img src={image} alt="profile" className="profile-image" />
              <i class="fas fa-edit edit-icon"></i>
              <br />
              <br />
              {/* Personal Info in Profile Card  */}
              <p className="text">Name: Ariyan</p>
              <p className="text">Age: 19</p>
              <p className="text">Sex: Male</p>
              <p className="text">BMI: </p>
            </div>
          </div>
          <div class="graph-col">col-8</div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
