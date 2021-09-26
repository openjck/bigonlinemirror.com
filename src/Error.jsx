import React from "react";
import PropTypes from "prop-types";

function Error({ error: { message } }) {
  return <p id="error">{message}</p>;
}

Error.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default Error;
