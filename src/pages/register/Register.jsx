import React, { useState } from "react";
import InputItem from "../../components/inputItem/InputItem";
import newRequest from "../../utils/newRequest";
import upload from "../../utils/upload";
import { useNavigate } from "react-router-dom";

import "./register.scss";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    desc: "",
    country: "",
    img: "",
    phone: "",
    isSeller: false,
  });
  const [file, setFile] = useState();
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleChangeCheck = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked ? e.target.checked : false };
    });
    console.log(e.target.checked )
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    let url = ""


    try {
      if (file) {
         url = await upload(file)
      }

      const { data } = await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      console.log(data)
      navigate("/login");

    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {  
        setError("`username` is required., email: Path `email` is required., country: Path `country` is required.")
      }
      
    }
  };

  return (
    <div className="register">
      <div className="container">
        <form className="row" onSubmit={handleRegister}>
          <div className="left">
            <h1>Create a new account</h1>
            <InputItem
              title={"Username"}
              name={"username"}
              placeholder={"write your username"}
              handleChange={handleChange}
            />
            <InputItem
              title={"Email"}
              name={"email"}
              type={"email"}
              placeholder={"write your email"}
              handleChange={handleChange}
            />
            <InputItem
              title={"Password"}
              name={"password"}
              type={"password"}
              placeholder={"write your password"}
              handleChange={handleChange}
            />
            <div className="input-item">
              <label htmlFor="">Profile Picture</label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <InputItem
              title={"Country"}
              name={"country"}
              type={"text"}
              placeholder={"write your country"}
              handleChange={handleChange}
            />
            <button className="btn-register">Register</button>
          </div>
          <div className="right">
            <h1>I want to become a seller</h1>
            <div className="active-seller">
              Activate the seller account
              <label className="toggler-wrapper style-1">
                <input type="checkbox" onChange={(e) => handleChangeCheck(e)} />
                <div className="toggler-slider">
                  <div className="toggler-knob"></div>
                </div>
              </label>
            </div>
            <InputItem
              title={"Phone Number"}
              name={"phone"}
              type="number"
              placeholder={"+1 234 567 89"}
              handleChange={handleChange}
            />
            <InputItem
              title={"Description"}
              name={"desc"}
              type="text"
              input={false}
              textarea={true}
              placeholder={"short description of yourself"}
              handleChange={handleChange}
            />
          </div>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default Register;
