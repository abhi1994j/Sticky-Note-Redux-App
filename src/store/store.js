import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../features/sticky note/NoteSlice"
export const store = configureStore({
  reducer : noteReducer
})