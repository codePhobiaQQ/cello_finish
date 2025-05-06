import {
  configureStore,
  Action,
  Store,
  combineReducers,
} from "@reduxjs/toolkit";
import { MakeStore } from "next-redux-wrapper";
import { ThunkAction } from "redux-thunk";
import appReducer from "./slices/AppSlice";

export const rootReducer = combineReducers({
  app: appReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<any>>;

export const makeStore: MakeStore<Store> = (): Store => {
  const store: Store = configureStore({
    reducer: rootReducer,
  });
  return store;
};
