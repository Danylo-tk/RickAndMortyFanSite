import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../slices/CardListSlice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
