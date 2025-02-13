import { IState } from "../types";

export const selectAvailableCountries = (state: { country: IState }) =>
  state.country.availableCountries;

export const selectFlagUrl = (state: { country: IState }) =>
  state.country.flagUrl;

export const selectBorders = (state: { country: IState }) =>
  state.country.borders?.borders;

export const selectParentBordersName = (state: { country: IState }) =>
  state.country.borders?.commonName;

export const selectPopulation = (state: { country: IState }) =>
  state.country.population;

export const selectIsLoading = (state: { country: IState }) =>
  state.country.isLoading;

export const selectError = (state: { country: IState }) => state.country.error;
