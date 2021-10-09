import { createSlice } from "@reduxjs/toolkit";

// We may need to use createAsyncThunk in this file, as I imagine getting the
// webcam choice from the user is an async call. I'm not sure if
// createAsyncThunk is strictly required when working with async data.
//
// See the redux template for create-react-app for more information.

export const webcamSlice = createSlice({
  name: "webcam",
  initialState: {
    webcam: null,
  },
  reducers: {
    setWebcam: (state, action) => {
      state.webcam = action.payload;
    },
  },
});

export const { setWebcam } = webcamSlice.actions;
export const selectWebcam = (state) => state.webcam.webcam;
export default webcamSlice.reducer;
