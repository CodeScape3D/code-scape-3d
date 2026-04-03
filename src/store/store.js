import { configureStore } from '@reduxjs/toolkit';
import { quizSlice } from './quiz';
import { sortsSlice } from './sorts';
import { stackSlice } from './stack';
import simpleListSlice from './simpleList/simpleListSlice';
import doubleListSlice from './doubleList/doubleListSlice';
import linearSearchSlice from './linearSearch/linearSearchSlice';
import binarySearchSlice from './binarySearch/binarySearchSlice';
import { queueSlice } from './queue';

export const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
    sorts: sortsSlice.reducer,
    stack: stackSlice.reducer,
    simpleList: simpleListSlice,
    doubleList: doubleListSlice,
    linearSearch: linearSearchSlice,
    binarySearch: binarySearchSlice,
    queue: queueSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
