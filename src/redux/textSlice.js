import { createSlice } from "@reduxjs/toolkit";
import getData from "./getData";

const textSlice = createSlice({
  name: 'text',
  initialState: {
    data: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getData:isFulfilled, (state, action) => {
      if (action.payload) {
        return { ...state, data: action.payload.data };
      }
      return { ...state, error: action.payload }
    });
  },
});

export default textSlice.reducer;