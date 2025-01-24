import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  testState: {} as {},
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    addTodo: (state) => {
      state.testState = ""
    }
  },

});

export const homeReducer = homeSlice.reducer;
export const { addTodo} = homeSlice.actions;