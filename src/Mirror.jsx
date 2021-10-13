import React from "react";
import { useSelector } from "react-redux";

import { selectWebcam } from "./state/slices/webcamSlice";

export default function Mirror() {
  const webcam = useSelector(selectWebcam);
  return <p>Mirror using webcam {webcam}</p>;
}
