import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  return (
    <>
      <Backdrop
        show={props.show}
        clicked={props.closed}
      />
      <div
        className="Modal"
        style={{
          opacity: props.show ? 1 : 0,
          transform: props.show ? "translateY(0)" : "translateY(-100vh)"
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
