import React from "react";
import "./inputItem.scss";

const InputItem = ({
  title,
  type,
  name,
  placeholder,
  input = true,
  textarea = false,
  onChange,
  handleChange,
}) => {
  return (
    <div className="input-item">
      <label htmlFor="">{title}</label>
      {input && (
        <input
          type={type ? type : "text"}
          name={name ? name : ""}
          placeholder={placeholder ? placeholder : ""}
          onChange={(e) =>
            onChange ? onChange(e.target.value) : handleChange(e)
          }
        />
      )}
      {textarea && (
        <textarea
          name={name}
          onChange={(e) =>
            onChange ? onChange(e.target.value) : handleChange(e)
          }
        ></textarea>
      )}
    </div>
  );
};

export default InputItem;
