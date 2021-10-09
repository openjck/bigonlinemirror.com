import React from "react";
import { useSelector } from "react-redux";

import { selectError } from "./state/slices/errorSlice";

function Error() {
  const error = useSelector(selectError);
  return <p id="error">{error.message}</p>;
}

export default Error;
