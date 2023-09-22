import { createSlice } from "@reduxjs/toolkit";

interface authState {
  isAuthenticate: boolean;
  isLoading: boolean;
}

const initialState = {
  isAuthenticate: false,
  isLoading: true,
} as authState;

interface AuthSliceType {
  name: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuthenticate = true;
    },
    logout: (state) => {
      state.isLoading = false;
    },
    finishInitialLoad: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setAuth, logout, finishInitialLoad } = authSlice.actions;
export default authSlice.reducer;
