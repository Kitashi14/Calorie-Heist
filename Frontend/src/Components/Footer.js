import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <Link class="text-head link" to="/about" exact>About</Link>
            <p class="text-justify">
              Hunger Station is an innovative site that keeps a track on all
              your daily calorie consumption. You'll now be able to keep a
              better track on all
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6 class="text-head link">Our Team</h6>
            <ul class="footer-links">
              <li>Ariyan Seikh</li>
              <li>Ayan Seikh</li>
              <li>Rishav</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;