// My store.js

import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './reducers/rocketReducer';

const store = configureStore({
  reducer: {
    rocketReducer,
  },
});

export default store;
