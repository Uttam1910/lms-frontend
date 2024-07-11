// src/redux/slice/courseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../helpers/axiosInstance';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await axiosInstance.get('/courses');
  return response.data;
});

export const fetchCourseById = createAsyncThunk('courses/fetchCourseById', async (courseId) => {
  const response = await axiosInstance.get(`/courses/${courseId}`);
  return response.data;
});

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    course: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCourseById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.loading = false;
        state.course = action.payload;
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer;
