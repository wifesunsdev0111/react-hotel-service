import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  zipCodeData: "ffffffffffff"
};

const zipCodeDataSlice = createSlice({
  name: "setZipCodeData",
  initialState,
  reducers: {
    setZipCodeData: (state, action) => {
      state.zipCodeData = action.payload;
      console.log(action.payload);
    }
  }
});

export const { setZipCodeData } = zipCodeDataSlice.actions;

export default zipCodeDataSlice.reducer;
