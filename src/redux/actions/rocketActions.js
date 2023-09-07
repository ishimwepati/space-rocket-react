// src/redux/actions/rocketActions.js

import axios from 'axios';
import { FETCH_SELECTED_ROCKETS, RESERVE_ROCKET, CANCEL_RESERVATION } from './types';

// Action to fetch selected rockets
export const fetchSelectedRockets = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');

    const selectedData = response.data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      description: rocket.description,
      flickr_images: rocket.flickr_images,
    }));

    dispatch({ type: FETCH_SELECTED_ROCKETS, payload: selectedData });
  } catch (error) {
    console.error('Error fetching selected rockets:', error);
  }
};

// Action creator to reserve a rocket
export const reserveRocket = (rocketId) => (dispatch, getState) => {
  // Get the current reserved rockets from the state
  const { reservedRockets } = getState().rocketReducer;

  if (!reservedRockets.includes(rocketId)) {
    // If the rocket is not already reserved, dispatch the RESERVE_ROCKET action
    dispatch({ type: RESERVE_ROCKET, payload: rocketId });
  }
};

// Action creator to cancel a rocket reservation
export const cancelReservation = (rocketId) => (dispatch, getState) => {
  // Get the current reserved rockets from the state
  const { reservedRockets } = getState().rocketReducer;

  if (reservedRockets.includes(rocketId)) {
    // If the rocket is reserved, dispatch the CANCEL_RESERVATION action
    dispatch({ type: CANCEL_RESERVATION, payload: rocketId });
  }
};

export default fetchSelectedRockets;
