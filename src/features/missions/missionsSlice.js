/* eslint-disable no-param-reassign */
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsURL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(missionsURL);
  return response.data.map((mission) => ({
    missionId: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    status: false,
  }));
});

const updateMissions = createAction('missions/UPDATE_STATUS');

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.missions = [...state.missions, ...action.payload];
        state.status = 'fulfilled';
      })
      .addCase(fetchMissions.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Error fetching missions data';
      })
      .addCase(updateMissions, (state, action) => {
        state.missions.forEach((mission) => {
          if (mission.missionId === action.payload) {
            mission.status = !mission.status;
          }
        });
      });
  },
});

export { fetchMissions, updateMissions };

export default missionsSlice.reducer;
