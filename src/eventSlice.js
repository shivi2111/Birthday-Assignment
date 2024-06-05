import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: [],
  },
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setFav: (state, action) => {
      const index = action.payload;
      if (state.events[index].isFav) state.events[index].isFav = false;
      else state.events[index].isFav = true;
    },
  },
  selectors: {
    getEvents: (state) => state.events,
  },
});

export const { setEvents, setFav } = eventSlice.actions;
export const { getEvents } = eventSlice.selectors;

export default eventSlice.reducer;
