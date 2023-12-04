import { configureStore } from "@reduxjs/toolkit";
import beritasReducer from "./sliceBeritas";

const store = configureStore({
  reducer: {
    beritas: beritasReducer,
  },
});

export default store;
