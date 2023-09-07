// src/Redux/missionsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  missionStatus: {}, // Add missionStatus state
  status: 'idle',
  error: null,
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  return response.data;
});

const missionsSlice = createSlice({
  name: 'missions', // Change the slice name from missionsSlice to 'missions'
  initialState,
  reducers: {
    toggleMissionStatus: (state, action) => {
      // Add a reducer to toggle mission status
      const { missionId } = action.payload;
      state.missionStatus[missionId] = !state.missionStatus[missionId];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { toggleMissionStatus } = missionsSlice.actions;

export default missionsSlice.reducer;
