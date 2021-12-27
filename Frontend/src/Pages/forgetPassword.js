import React from "react";
import { Link } from "react-router-dom";
import "./forgetPassword.css";

const ForgetPassword = () => {
  return (
    <div className="body">
      <div class="fg-box ">
        <h1 class="ForgotPasswordTitleIcon">
          <i class="fas fa-unlock-alt"></i>
        </h1>
        <h1 class="ForgotPasswordTitle">Forgot Password?</h1>
        <form method="post">
          <div class="txt_field">
            <input type="email" required />
            <label>
              <i class="fas fa-envelope-open"></i> Email Address
            </label>
          </div>
          <div class="txt_field">
            <input type="password" required />
            <label>
              <i class="fas fa-lock"></i> New Password
            </label>
          </div>
          <div class="txt_field">
            <input type="password" required />
            <label>
              <i class="fas fa-lock"></i> Confirm New Password
            </label>
          </div>
          <input type="submit" value="Login"  />
          <div class="signup_link">
            Not a member? <Link to="/signup" exact  >Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
