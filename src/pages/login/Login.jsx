import React from "react";
import InputItem from "../../components/inputItem/InputItem";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <form>
          <InputItem
            title={"Username"}
            name={"text"}
            placeholder={"write your username"}
          />
          <InputItem
            title={"Password"}
            name={"password"}
            type={"password"}
            placeholder={"write your password"}
          />
          <button className="btn-login">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
