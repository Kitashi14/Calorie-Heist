import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import MainPage from "./Pages/MainPage"
import ProfilePage from "./Pages/ProfilePage"
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import About from "./Pages/about";
import ForgetPassword from "./Pages/forgetPassword";

function App() {
  return (
    <>
      <Router>
        <Navbar  />

        <Switch>
          <Route path="/" exact>
            {/* <ProfilePage /> */}
            <HomePage />
            {/* <MainPage /> */}
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/fgpasswd" exact>
            <ForgetPassword />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </>
    // <>
    //   <HomePage />
    // </>
  );
}

export default App;
