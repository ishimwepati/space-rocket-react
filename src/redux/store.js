import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './reducers/rocketReducer'; // Import your rocketReducer
// Import other reducers if you have them

const store = configureStore({
  reducer: {
    rocketReducer, // Add other reducers here if needed
  },
  middleware: [thunk],
});

export default store;
