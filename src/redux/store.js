import { configureStore } from '@reduxjs/toolkit';
import { wordsSlice } from './wordsSlice';
import { resultsSlice } from './resultsSlice';

export const store = configureStore({
  reducer: {
    words: wordsSlice.reducer,
    results: resultsSlice.reducer,
  },
});
