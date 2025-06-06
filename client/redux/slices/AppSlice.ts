import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Lang} from "../../types/types";

const LANG_LS_KEY = 'lang'

export interface appState {
  isLoading: boolean;
  language: Lang;
  thanks: boolean;
}

const initialState: appState = {
  isLoading: true,
  language: "en",
  thanks: false,
};

export const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setLanguage: (state, action: PayloadAction<Lang>) => {
      localStorage.setItem(LANG_LS_KEY, action.payload);
      state.language = action.payload;
    },
    setThanks: (state, action: PayloadAction<boolean>) => {
      state.thanks = action.payload;
    },
  },
});
export const { setLoading, setLanguage, setThanks } = appReducer.actions;

export default appReducer.reducer;
