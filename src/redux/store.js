import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './reducers/rocketReducer';

const store = configureStore({
  reducer: {
    rocketReducer,
  },
  middleware: [thunk],
});

export default store;
