// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import courseReducer from './slice/courseSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: courseReducer,
  },
});

export default store;
