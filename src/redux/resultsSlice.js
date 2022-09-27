import { createSlice } from '@reduxjs/toolkit';

export const resultsSlice = createSlice({
  name: 'results',
  initialState: [],
  reducers: {
    addResult(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { addResult } = resultsSlice.actions;
