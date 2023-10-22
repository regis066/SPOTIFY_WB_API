import React from "react";
import "./Login.css";
import { loginUrl } from "../../config/spotify";

const Login = () => {
  return (
    <div className="login">
      <img src="/white-spotify-logo.jpg" alt="Spotify logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
