import React from "react";
import PropTypes from "prop-types";

function Splash({ handleError, handleWebcamSelection }) {
  return (
    <>
      <p>Instructions</p>
      <p>Webcam selector</p>
    </>
  );
}

Splash.propTypes = {
  handleError: PropTypes.func.isRequired,
  handleWebcamSelection: PropTypes.func.isRequired,
};

export default Splash;
