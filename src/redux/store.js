// My store.js

import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './reducers/rocketReducer';
import missionsReducer from './missionsSlice';

const store = configureStore({
  reducer: {
    rocketReducer,
    missions: missionsReducer,
  },
});

export default store;
