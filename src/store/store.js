import { configureStore } from '@reduxjs/toolkit';
import { quizSlice } from './quiz';
import { sortsSlice } from './sorts';
import { stackSlice } from './stack';
import simpleListSlice from './simpleList/simpleListSlice';

export const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
    sorts: sortsSlice.reducer,
    stack: stackSlice.reducer,
    simpleList: simpleListSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
