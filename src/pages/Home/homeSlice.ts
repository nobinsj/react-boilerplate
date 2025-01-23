import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  testState: {} as {},
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    getTestState: (state, action: PayloadAction<any>) => {
      state.testState = action.payload;
    },
  },
});

export const homeReducer = homeSlice.reducer;
export const { getTestState } = homeSlice.actions;
