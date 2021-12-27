import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" exact>
            <i class="fas fa-hamburger"></i>{" "}
            <span className="navbar-brand">Hunger Station</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" method="get" action="/login">
              <button type="submit" class="btn btn-dark" onClick={ <Redirect to="/login" exact/>}>
                Login / Register
              </button>
            </form> */}
            {props.Login ? ( <Link to="/BMI" className="btn btn-dark" exact>
                BMI Calculator
              </Link>
              
            ) : (
              <Link to="/login" className="btn btn-dark" exact>
                Login / Register
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
