import React from "react";
import { useSelector } from "react-redux";

import Error from "./Error";
import Splash from "./Splash";
import Footer from "./Footer";
import Mirror from "./Mirror";
import { selectError } from "./state/slices/errorSlice";
import { selectWebcam } from "./state/slices/webcamSlice";

export default function App() {
  const error = useSelector(selectError);
  const webcam = useSelector(selectWebcam);

  let content;
  if (error) {
    content = <Error />;
  } else if (webcam === null) {
    content = <Splash />;
  } else {
    content = <Mirror />;
  }

  return (
    <>
      <main>{content}</main>
      <Footer />
    </>
  );
}
