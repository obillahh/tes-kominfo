// src/redux/beritas/slice.js
import { createSlice } from "@reduxjs/toolkit";

const beritasSlice = createSlice({
  name: "beritas",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchBeritasRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBeritasSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchBeritasFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBeritasRequest, fetchBeritasSuccess, fetchBeritasFailure } =
  beritasSlice.actions;

export default beritasSlice.reducer;
