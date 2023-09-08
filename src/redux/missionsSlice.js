// src/Redux/missionsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  missionStatus: {},
  status: 'idle',
  error: null,
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  } catch (error) {
    alert.error('An error occurred while fetching missions:', error);
    throw error;
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggleMissionStatus: (state, action) => {
      const { missionId } = action.payload;
      state.missionStatus = {
        ...state.missionStatus,
        [missionId]: !state.missionStatus[missionId],
      };
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
