import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setError } from "./state/slices/errorSlice";
import { setWebcam, selectWebcam } from "./state/slices/webcamSlice";

import "./Footer.css";

export default function Footer() {
  const dispatch = useDispatch();
  const webcam = useSelector(selectWebcam);

  // Ultimately, the following will probably be used somewhere in this
  // component:
  //
  // dispatch(setError())
  // dispatch(setWebcam())

  return (
    <footer>
      <span>
        bigonlinemirror.com is{" "}
        <a href="https://github.com/openjck/bigonlinemirror.com">
          free and open-source
        </a>.
      </span>
      <span>
        TBD: Webcam selector
        {/*
          If a webcam has already been set but the user wants to change their
          choice
        */}
      </span>
    </footer>
  );
}
