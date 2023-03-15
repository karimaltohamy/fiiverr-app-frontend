import React from "react";
import InputItem from "../../components/inputItem/InputItem";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <form className="row">
          <div className="left">
            <h1>Create a new account</h1>
            <InputItem
              title={"Username"}
              name={"text"}
              placeholder={"write your username"}
            />
            <InputItem
              title={"Email"}
              name={"email"}
              type={"email"}
              placeholder={"write your email"}
            />
            <InputItem
              title={"Password"}
              name={"password"}
              type={"password"}
              placeholder={"write your password"}
            />
            <InputItem title={"Profile Picture"} name={"file"} type={"file"} />
            <InputItem
              title={"Country"}
              name={"country"}
              type={"text"}
              placeholder={"write your country"}
            />
            <button className="btn-register">Register</button>
          </div>
          <div className="right">
            <h1>I want to become a seller</h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
