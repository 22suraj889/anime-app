import React from "react";
import Style from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={Style["btn"]} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
