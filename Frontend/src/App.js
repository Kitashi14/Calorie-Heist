import React, {useState, useCallback, useEffect} from "react";
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

import { AuthContext } from "./context/auth-context";
import Bmi from "./Components/Bmi";

let logoutTimer;

function App() {

  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid, 
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  let routes;
  let navType;

  if(token) {
    navType = "bmi";
    console.log(navType);
    routes =(
      <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/home" exact>
            <MainPage />
          </Route>
          <Route path="/about" exact>
            {/* <Bmi /> */}
            <About />
          </Route>
          <Route path="/BMI" exact>
            
          </Route>
          <Redirect to="/" />
        </Switch>
    );
    
  } else {
    navType = "login";
    console.log(navType);
    routes = (
      <Switch>
          <Route path="/" exact>
            <HomePage />
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
    )
  }
  return (
    <>
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
      >
      <Router>
        <Navbar type={navType} ></Navbar> 
          <main  >{routes}</main>
        <Footer />
      </Router>
      
    </AuthContext.Provider>
    </>
    // <>
    //   <HomePage />
    // </>
  );
}

export default App;
