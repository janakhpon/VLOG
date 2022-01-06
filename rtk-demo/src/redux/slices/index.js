import { configureStore } from "@reduxjs/toolkit";
import task from "./task";

export const store = configureStore({
  reducer: {
    task,
  },
});
