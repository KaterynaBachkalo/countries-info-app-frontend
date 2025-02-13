import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const countryInstance = axios.create({
  baseURL: "http://localhost:5000/api/",
});

export const fetchAvailableCountries = createAsyncThunk(
  "/countries/fetchAvailableCountries",
  async (_, thunkAPI) => {
    try {
      const response = await countryInstance.get("/countries");

      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const fetchCountryInfo = createAsyncThunk(
  "/countries/fetchFlagUrl",
  async (code: string, thunkAPI) => {
    try {
      const response = await countryInstance.get(`/countries/${code}`);

      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);
