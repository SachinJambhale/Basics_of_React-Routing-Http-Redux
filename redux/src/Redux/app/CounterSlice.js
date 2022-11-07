import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (action, payload) => {
      state.count =
        state.count + (action.payload ? parseFloat(action.payload) : 1);
    },
    decrement: (action, payload) => {
      return (state.count =
        state.count - (action.payload ? parseFloat(action.payload) : 1));
    },
    reset: () => ({ count: 0 }),
  },
});

export const { increment, decrement, reset } = CounterSlice.actions;

export const selectCount = (state) => state.counter.count;

export default CounterSlice.reducer;
