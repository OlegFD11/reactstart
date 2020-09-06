import React from "react";
import "./Car.css";

const car = (props) => {
  const inputClasses = [];

  return (
    <div className="Car">
      <h1>{props.name}</h1>
      <input type="text" onChange={props.onChangeName} />
    </div>
  );
};
export default car;
