import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventSlice";
import configReducer from "./configReducer";

const store = configureStore({
  reducer: {
    events: eventsReducer,
    configs: configReducer
  },
});

export default store;
