// src/redux/reducers/rocketReducer.js

import { FETCH_SELECTED_ROCKETS } from '../actions/types';

const initialState = {
  selectedRockets: [],
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SELECTED_ROCKETS:
      return {
        ...state,
        selectedRockets: action.payload,
      };
    default:
      return state;
  }
};

export default rocketReducer;
