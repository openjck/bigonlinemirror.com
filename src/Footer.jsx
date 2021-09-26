import React from "react";
import PropTypes from "prop-types";

function Footer({ handleError, handleWebcamSelection }) {
  return (
    <>
      <p>Link to source for AGPL compliance</p>
      <p>
        Webcam selector if a webcam has already been set but the user wants to
        change their choice
      </p>
    </>
  );
}

Footer.propTypes = {
  handleError: PropTypes.func.isRequired,
  handleWebcamSelection: PropTypes.func.isRequired,
};

export default Footer;
