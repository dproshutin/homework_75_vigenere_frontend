import React from "react";
import "./Backdrop.css";

const Backdrop = props => {
  return props.show ? <div className="Backdrop" onClick={props.click} /> : null;
};

export default Backdrop;
