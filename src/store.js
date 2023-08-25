import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./Slices/CounterSlice"; // Adjust the path accordingly

export const store = configureStore({
  reducer: {
    location: locationReducer, // Use "location" instead of "LocationName"
  },
});
