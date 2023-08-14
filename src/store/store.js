import { configureStore } from "@reduxjs/toolkit";
import { quizSlice } from "./quiz";

export const store = configureStore({
    reducer: {
        quiz: quizSlice.reducer
    }
})