import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: true, // Enable Redux DevTools
});

export default store;

