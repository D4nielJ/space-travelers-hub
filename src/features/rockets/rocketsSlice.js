/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk('rockets/getRockets', async () => {
  const { data } = await axios.get(baseUrl);
  return data;
});

export const updateRockets = createAction('rockets/UPDATE_STATUS');

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
        const newRockets = action.payload.map((el) => ({
          id: el.id,
          name: el.name,
          description: el.description,
          image: el.flickr_images[0],
          booking: false,
        }));
        state.list = [...state.list, ...newRockets];
        state.status = 'fulfilled';
      })
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(updateRockets, (state, action) => {
        state.list.forEach((el) => {
          if (el.id === action.payload) {
            el.booking = !el.booking;
          }
        });
      });
  },
});

export default postRocket.reducer;
