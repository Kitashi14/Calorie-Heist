import React from "react";
import { Link } from 'react-router-dom';
import "./Login.css";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { useHttpClient } from "../hooks/useHttpClient";


const Login = () => {
  const auth = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const history = useHistory();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    try {
      const responseData = await sendRequest(
        "http://localhost:4000/api/users/login",
        "POST",
        JSON.stringify({ 
          email: email,
          password: password
        }),
        {
          "Content-Type": "application/json",
        }
      );

      auth.login(responseData.userId, responseData.token);
      console.log("successfull");
      let path = "/home";
      history.push(path);
    } catch (err) {}
  };
  return (
    <div className="body">
      
      <div class="login-box center">
        <h1 class="LoginTitleIcon">
          <i class="fas fa-sign-in-alt"></i>
        </h1>
        <h1 class="LoginTitle">Login</h1>
        <form onSubmit={onFormSubmit} >
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
