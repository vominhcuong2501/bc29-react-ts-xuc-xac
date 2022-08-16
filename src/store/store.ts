import { xucXacReducer } from "./reducers/xucXacReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  xucXacReducer: xucXacReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});


// học thuộc
export type RootState = ReturnType<typeof store["getState"]>;

export type AppDispatch = typeof store["dispatch"];
