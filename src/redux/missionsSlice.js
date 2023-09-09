// src/Redux/missionsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  missionStatus: {},
  status: 'idle',
  error: null,
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
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
