import React from "react";
import "./inputItem.scss";

const InputItem = ({ title, type, name, placeholder }) => {
  return (
    <div className="input-item">
      <label htmlFor="">{title}</label>
      <input
        type={type ? type : "text"}
        name={name ? name : ""}
        placeholder={placeholder ? placeholder : ""}
      />
    </div>
  );
};

export default InputItem;
