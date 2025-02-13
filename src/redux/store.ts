import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countryReducer } from "./slices";

const rootReducer = combineReducers({
  country: countryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
