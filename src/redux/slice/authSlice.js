import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../helpers/axiosInstance';
import { toast } from 'react-hot-toast';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  role: tryParseJson(localStorage.getItem('role')),
  user: tryParseJson(localStorage.getItem('user')),
  loading: false,
  error: null,
};

// Helper function to parse JSON safely
function tryParseJson(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return null;
  }
}

// export const registerUser = createAsyncThunk(
//   'auth/registerUser',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post('/users/register', userData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post('/users/login', userData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/users/register', userData);
      console.log('Token received during registration:', response.data.token);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/users/login', userData);
      console.log('Token received during login:', response.data.token);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/users/logout');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

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
      localStorage.setItem('role', JSON.stringify(action.payload.role));
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

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.role = action.payload.role;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('role', JSON.stringify(action.payload.role));
        toast.success('Registration successful');
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
        if (action.payload && action.payload.message) {
          toast.error(action.payload.message);
        } else {
          toast.error('Registration failed. Please try again.');
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.role = action.payload.role;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('role', JSON.stringify(action.payload.role));
        toast.success('Login successful');
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed. Please try again.';
        if (action.payload && action.payload.message) {
          toast.error(action.payload.message);
        } else {
          toast.error('Login failed. Please try again.');
        }
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.user = null;
        state.role = null;
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        toast.success('Logout successful');
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Logout failed. Please try again.';
        if (action.payload && action.payload.message) {
          toast.error(action.payload.message);
        } else {
          toast.error('Logout failed. Please try again.');
        }
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
