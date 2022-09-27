import { createSlice } from '@reduxjs/toolkit';

export const wordsSlice = createSlice({
  name: 'words',
  initialState: [],
  reducers: {
    addWords(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { addWords } = wordsSlice.actions;
