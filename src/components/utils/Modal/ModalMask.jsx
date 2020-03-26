import React from "react";
import PropTypes from "prop-types";

const maskStyle = {
  background: "#1a1a1a",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 9999,
  padding: "0px 0px",
  width: "100vw"
};

const ModalMask = ({ children }) => {
  return (
    <div className="modal_mask" style={maskStyle}>
      {children}
    </div>
  );
};

ModalMask.propType = {
  children: PropTypes.node
};

export default ModalMask;
