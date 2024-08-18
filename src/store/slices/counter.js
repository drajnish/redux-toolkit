import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countValue: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    handleIncrementCounter: (state) => {
      state.countValue += 1;
    },
  },
});

export const { handleIncrementCounter } = counterSlice.actions;

export default counterSlice.reducer;
