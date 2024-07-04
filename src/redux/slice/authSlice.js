import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  role: localStorage.getItem('role') || null,
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('role', action.payload.role);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.role = null;
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
      localStorage.removeItem('role');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
