import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  email: string;
  password: string;
}

const initialState: AuthState = {
  email: "ravi@gmail.com",
  password: "123456",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;