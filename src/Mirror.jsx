import React from "react";
import PropTypes from "prop-types";

function Mirror({ handleError, webcam }) {
  return <p>Mirror using webcam {webcam}</p>;
}

Mirror.propTypes = {
  handleError: PropTypes.func.isRequired,
  webcam: PropTypes.string.isRequired,
};

export default Mirror;
