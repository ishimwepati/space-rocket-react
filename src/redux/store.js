import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './reducers/rocketReducer';
import missionsReducer from './missionsSlice';

const store = configureStore({
  reducer: {
    rocketReducer,
    missions: missionsReducer,
  },
  middleware: [thunk],
});

export default store;
