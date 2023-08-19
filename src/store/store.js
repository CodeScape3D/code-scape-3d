import { configureStore } from "@reduxjs/toolkit";
import { quizSlice } from "./quiz";
import { sortsSlice } from "./sorts";

export const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
    sorts: sortsSlice.reducer,
  },
});
