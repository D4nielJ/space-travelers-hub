/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk('rockets/getRockets', async () => {
  const { data } = await axios.get(baseUrl);
  return data;
});

const postRocket = createSlice({
  name: 'rockets',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.list = [...state.list, ...action.payload];
        state.status = 'fulfilled';
      })
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'pending';
      });
  },
});

export default postRocket.reducer;
