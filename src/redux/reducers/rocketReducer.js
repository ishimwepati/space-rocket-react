// src/redux/reducers/rocketReducer.js

import { FETCH_SELECTED_ROCKETS } from '../actions/types';

const initialState = {
  selectedRockets: [], // Initial state for selected rockets data
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SELECTED_ROCKETS:
      return {
        ...state,
        selectedRockets: action.payload, // Update selected rockets data in the store
      };
    default:
      return state;
  }
};

export default rocketReducer;
