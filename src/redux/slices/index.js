import { createSlice } from "@reduxjs/toolkit";

const InitialValue = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: InitialValue,
  reducers: {
    increaseReducer(state) {
      state.count++;
    },
    decreaseReducer(state) {
      state.count--;
    },
    resetReducer(state) {
      state.count = 0;
    },
    randomIncreaseReducer(state, action) {
      state.count = state.count + action.payload;
    },
  },
});

export const actions = counterSlice.actions;
