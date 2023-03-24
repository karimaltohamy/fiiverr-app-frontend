import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputItem from "../../components/inputItem/InputItem";
import newRequest from "../../utils/newRequest";
import { useCookies } from "react-cookie";
import "./login.scss";


const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // const [cookies, setCookie] = useCookies(["token"]);

    try {
      const { data } = await newRequest.post("/auth/login", {
        username,
        password,
      });
      localStorage.setItem("currentUser", JSON.stringify(data));
      // setCookie("token", data.token, { path: "/" })
      // console.log(cookies)
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <InputItem
            title={"Username"}
            name={"text"}
            placeholder={"write your username"}
            onChange={setUsername}
          />
          <InputItem
            title={"Password"}
            name={"password"}
            type={"password"}
            placeholder={"write your password"}
            onChange={setPassword}
          />
          <button className="btn-login">Login</button>
        </form>
        {error && <span className="error">{error}</span>}
      </div>
    </div>
  );
};

export default Login;
