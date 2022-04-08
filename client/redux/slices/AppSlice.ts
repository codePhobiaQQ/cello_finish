import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { boolean } from "property-information/lib/util/types";

export interface appState {
  isLoading: boolean;
  language: string;
  thanks: boolean;
}

const initialState: appState = {
  isLoading: true,
  language: "En",
  thanks: false,
};

export const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setThanks: (state, action: PayloadAction<boolean>) => {
      state.thanks = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { setLoading, setLanguage, setThanks } = appReducer.actions;

export default appReducer.reducer;
