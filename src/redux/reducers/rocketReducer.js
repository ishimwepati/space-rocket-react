// src/redux/reducers/rocketReducer.js

import { FETCH_SELECTED_ROCKETS, RESERVE_ROCKET, CANCEL_RESERVATION } from '../actions/types';

const initialState = {
  selectedRockets: [], // Initial state for selected rockets data
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SELECTED_ROCKETS:
      return {
        ...state,
        selectedRockets: action.payload.map((rocket) => ({
          ...rocket,
          reserved: false, // Initialize the reserved property as false for all rockets
        })),
      };
    case RESERVE_ROCKET:
      return {
        ...state,
        selectedRockets: state.selectedRockets.map((rocket) => (
          rocket.id === action.payload ? { ...rocket, reserved: true } : rocket
        )),
      };
    case CANCEL_RESERVATION:
      return {
        ...state,
        selectedRockets: state.selectedRockets.map((rocket) => (
          rocket.id === action.payload ? { ...rocket, reserved: false } : rocket
        )),
      };
    default:
      return state;
  }
};

export default rocketReducer;
