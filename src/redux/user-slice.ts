import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  domain: string,
  first_name: string,
  href: string,
  id: string,
  last_name: string,
  nickname: string,
}

interface AuthState {
  user: User | null,
  isAuthenticated: boolean,
  loading: boolean,
  error: string | null,
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;