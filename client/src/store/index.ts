import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from 'app/model';

const rootReducer = combineReducers({
  appReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];