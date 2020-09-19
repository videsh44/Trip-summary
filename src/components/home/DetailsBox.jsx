import React from "react";
import "./home.css";

const DetailsBox = (props) => {
  return (
    <div>
      <div style={{ background: props.color }} className="serviceBox">
        <div className="serviceBox__img">{props.logo}</div>
        <div className="serviceBox__text">{props.text}</div>
      </div>
    </div>
  );
};

export default DetailsBox;
