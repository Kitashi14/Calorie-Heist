import React from "react";
import "./Signup.css";
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/auth-context";

const Signup = () => {

  const auth = useContext(AuthContext);

  const onFormSubmit =async e => {

    e.preventDefault();
    var email = document.getElementById('em'). value;
    var password = document.getElementById('pass').value;
    var name =document.getElementById('name').value;
    try {
      const responseData = await sendRequest(
        'http://localhost:5000/api/users/signup',
        'POST',
        JSON.stringify({
          name: name,
           email: email,
           password:password
        }),
        {
          'Content-Type': 'application/json'
        }
      );

      auth.login(responseData.user.email,responseData.token);
      document.getElementById('em'). value="";
      document.getElementById('pass'). value="";
      document.getElementById('name'). value="";
    } catch (err) {}
 
  }
  
  return (
    <div className="body">
      <div class="signup-box center">
        <h1 class="SignUpTitleIcon">
          <i class="fas fa-user-lock"></i>
        </h1>
        <h1 class="SignUpTitle">SignUp</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" id="uname" required />
            <span></span>
            <label>
              <i class="fas fa-user"></i> Username
            </label>
          </div>
          <div class="txt_field">
            <input type="email" id="email" required />
            <span></span>
            <label>
              <i class="fas fa-envelope-open"></i> Email Address
            </label>
          </div>
          <div class="txt_field">
            <input type="password" id="password" required />
            <span></span>
            <label>
              <i class="fas fa-key"></i> Password
            </label>
          </div>
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>
              <i class="fas fa-key"></i> Re-confirm Password
            </label>
          </div>
          <input type="submit" value="Make an Account" />
          <div class="signin_link">
            Aldready a member? <Link to="/login" exact>Log In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
