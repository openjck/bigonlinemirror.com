import React from "react";
import { useDispatch } from "react-redux";

import { setError } from "./state/slices/errorSlice";
import { setWebcam } from "./state/slices/webcamSlice";

function Splash() {
  const dispatch = useDispatch();

  // Ultimately, the following will probably be used somewhere in this
  // component:
  //
  // dispatch(setError())
  // dispatch(setWebcam())

  return (
    <>
      <p>Instructions</p>
      <p>Webcam selector</p>
    </>
  );
}

export default Splash;
