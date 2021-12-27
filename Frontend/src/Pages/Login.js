import React from "react";
import { Link } from 'react-router-dom';
import "./Login.css";


const Login = () => {
  return (
    <div className="body">
      
      <div class="login-box center">
        <h1 class="LoginTitleIcon">
          <i class="fas fa-sign-in-alt"></i>
        </h1>
        <h1 class="LoginTitle">Login</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" id="uname" required />
            <span></span>
            <label>
              <i class="fas fa-user"></i> Username
            </label>
          </div>
          <div class="txt_field">
            <input type="password" id="password" required />
            <span></span>
            <label>
              <i class="fas fa-key"></i> Password
            </label>
          </div>
          <Link class="pass" to="/fgpasswd" exact>Forgot Password?</Link>
          <input type="submit" value="Login" />
          <div class="signup_link">
            Not a member? <Link to="/signup" exact  >Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
