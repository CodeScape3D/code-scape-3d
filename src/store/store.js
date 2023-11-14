import { configureStore } from "@reduxjs/toolkit";
import { quizSlice } from "./quiz";
import { sortsSlice } from "./sorts";
import { stackSlice } from "./stack";
import { linkedListSlice } from "./linkedlist";

export const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
    sorts: sortsSlice.reducer,
    stack: stackSlice.reducer,
    linkedList: linkedListSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
