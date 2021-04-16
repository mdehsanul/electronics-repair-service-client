import React, { useContext, useState } from "react";
import "./Login.css";
import google from "../../images/google.png";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { handleGoogleSignIn, initializeLoginFramework } from "./LoginManager";
import firebase from "firebase/app";

const Login = () => {
  // useContext()
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // PrivateRoute
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // useState() for firebase
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignin: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    success: false,
    error: "",
  });

  initializeLoginFramework();

  const handleAllFunctionResponse = (response, redirect) => {
    setUser(response);
    setLoggedInUser(response);
    // storeAuthToken();
    if (redirect) {
      // PrivateRoute
      history.replace(from);
    }
  };

  // google validation using firebase
  const googleSignIn = () => {
    handleGoogleSignIn().then((response) => {
      handleAllFunctionResponse(response, true);
    });
  };

  //   // User AuthToken for showing information to correct user
  //   const storeAuthToken = () => {
  //     // idToken comes from the client app
  //     firebase
  //       .auth()
  //       .currentUser.getIdToken(/* forceRefresh */ true)
  //       .then(function (idToken) {
  //         // Send token to your backend via HTTPS
  //         console.log(idToken);
  //         sessionStorage.setItem("token", idToken);
  //       })
  //       .catch(function (error) {
  //         // Handle error
  //       });
  //   };

  return (
    <div className="login">
      <h1 className="loginHeader">
        Welcome to <br /> Electronics Repair Service
      </h1>
      <h4 className="loginTitle">Login With</h4>
      <div className="socialButton">
        <button className="button" onClick={googleSignIn}>
          <img src={google} className="googleImage" /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
