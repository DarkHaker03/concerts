import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from 'app/model';
import buyTicketReducer from 'pages/buy-ticket/model';

const rootReducer = combineReducers({
  appReducer,
  buyTicketReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
