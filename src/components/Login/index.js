import React from "react";

import "./login.css";
import { loginUrl } from "../../helpers/spotify";

const Login = () => {
  return (
      <div className="login">
      <img src="/images/logo.png" alt="logo"/>
      <a href={loginUrl}>Login With Spotify</a>
      </div>
  );
}

export default Login;
