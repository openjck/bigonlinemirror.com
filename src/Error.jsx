import React from "react";
import { useSelector } from "react-redux";

import { selectError } from "./state/slices/errorSlice";

export default function Error() {
  const error = useSelector(selectError);
  return <p id="error">{error.message}</p>;
}
