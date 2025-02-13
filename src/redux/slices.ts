import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { AvailableCountriesPayload, InfoPayload, IState } from "../types";
import { fetchAvailableCountries, fetchCountryInfo } from "./operations";

export const handlePending = (state: IState): void => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (
  state: IState,
  action: PayloadAction<unknown>
): void => {
  state.isLoading = false;
  state.error = action.payload;

  if (state.error === 400) {
    toast.error("Something went wrong...", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

const INITIAL_STATE = {
  availableCountries: [],
  borders: null,
  population: [],
  flagUrl: null,

  isLoading: false,
  error: null,
};

const countrySlice = createSlice({
  name: "country",
  initialState: INITIAL_STATE,

  reducers: {
    clearState(state: IState) {
      state.availableCountries = [];
      state.borders = null;
      state.population = [];
      state.flagUrl = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(
        fetchAvailableCountries.fulfilled,
        (state: IState, action: PayloadAction<AvailableCountriesPayload>) => {
          state.availableCountries = action.payload;

          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(
        fetchCountryInfo.fulfilled,
        (state: IState, action: PayloadAction<InfoPayload>) => {
          state.flagUrl = action.payload.flagUrl;
          state.borders = action.payload.borders;
          state.population = action.payload.population;

          state.isLoading = false;
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(fetchAvailableCountries.pending, fetchCountryInfo.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(fetchAvailableCountries.rejected, fetchCountryInfo.rejected),
        handleRejected
      );
  },
});

export const { clearState } = countrySlice.actions;

export const countryReducer = countrySlice.reducer;
