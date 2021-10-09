import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setError } from "./state/slices/errorSlice";
import { setWebcam, selectWebcam } from "./state/slices/webcamSlice";

function Footer() {
  const dispatch = useDispatch();
  const webcam = useSelector(selectWebcam);

  // Ultimately, the following will probably be used somewhere in this
  // component:
  //
  // dispatch(setError())
  // dispatch(setWebcam())

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

export default Footer;
