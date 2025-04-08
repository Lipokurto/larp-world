import { configureStore } from '@reduxjs/toolkit';
import { appDataReducer } from './appDataSlice';
// import apiDataReducer from './apiDataSlice';

export const store = configureStore({
  reducer: {
    appData: appDataReducer,
    // user: undefined,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;