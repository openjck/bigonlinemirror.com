import React from "react";
import { useSelector } from "react-redux";

import Error from "./Error";
import Splash from "./Splash";
import Footer from "./Footer";
import Mirror from "./Mirror";
import { selectError } from "./state/slices/errorSlice";
import { selectWebcam } from "./state/slices/webcamSlice";

function App() {
  const error = useSelector(selectError);
  const webcam = useSelector(selectWebcam);

  let body;
  if (error) {
    body = <Error />;
  } else if (webcam === null) {
    body = <Splash />;
  } else {
    body = <Mirror />;
  }

  return (
    <>
      <main>{body}</main>
      <Footer />
    </>
  );
}

export default App;
