import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    isLoading: false,
  },
  reducers: {
    toggleLoading: (state, action) => {
      state.isLoading = !state.isLoading;
    },
  },
  selectors: {
    getIsLoading: (state) => state.isLoading,
  },
});

export const { getIsLoading } = configSlice.selectors;
export const { toggleLoading } = configSlice.actions;

export default configSlice.reducer;

