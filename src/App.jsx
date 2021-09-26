import React, { useState, useCallback } from "react";

import Error from "./Error";
import Splash from "./Splash";
import Footer from "./Footer";
import Mirror from "./Mirror";

export default function App() {
  const [error, setError] = useState(null);
  const [webcam, setWebcam] = useState(null);

  const handleError = useCallback((err) => {
    setError(err);
  }, []);

  const handleWebcamSelection = useCallback((selection) => {
    setWebcam(selection);
  }, []);

  let content;
  if (error) {
    content = <Error error={error} />;
  } else if (webcam === null) {
    content = (
      <Splash
        handleError={handleError}
        handleWebcamSelection={handleWebcamSelection}
      />
    );
  } else {
    content = <Mirror handleError={handleError} webcam={webcam} />;
  }

  return (
    <>
      <main>{content}</main>
      <Footer
        handleError={handleError}
        handleWebcamSelection={handleWebcamSelection}
      />
    </>
  );
}
