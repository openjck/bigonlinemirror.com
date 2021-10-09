import { configureStore } from "@reduxjs/toolkit";

import errorReducer from "./slices/errorSlice";
import webcamReducer from "./slices/webcamSlice";

export default configureStore({
  reducer: {
    error: errorReducer,
    webcam: webcamReducer,
  },
});
