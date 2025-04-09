import { configureStore } from '@reduxjs/toolkit';
import { appDataReducer } from './app-data-slice';
import { userReducer } from './user-slice';

export const store = configureStore({
  reducer: {
    appData: appDataReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;