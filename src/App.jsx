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

  if (error) {
    return <Error />;
  }

  if (webcam === null) {
    return (
      <main>
        <Splash />
      </main>
    );
  }

  return (
    <>
      <main>
        <Mirror />
      </main>
      <Footer />
    </>
  );
}

export default App;
