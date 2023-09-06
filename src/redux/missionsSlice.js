// src/Redux/missionsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  return response.data;
});

const missionsSlice = createSlice({
  name: 'missionsSlice', // Change the slice name here
  initialState,
  reducers: {},
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

export default missionsSlice.reducer;
