import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  stack: [],
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementBy: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    pushToStack: (state, action) => {
      state.stack.push(action.payload);
    },
    popFromStack: (state) => {
      state.stack.pop();
    },
  },
});

export const { incrementBy, decrement, pushToStack, popFromStack } = counterSlice.actions;
export default counterSlice.reducer;