// my src/redux/actions/rocketActions.js

import { FETCH_SELECTED_ROCKETS, RESERVE_ROCKET, CANCEL_RESERVATION } from './types';

export const fetchSelectedRockets = () => async (dispatch) => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const rocketData = await response.json();
    const selectedData = rocketData.map((rocket) => ({
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

export const reserveRocket = (rocketId) => ({
  type: RESERVE_ROCKET,
  payload: rocketId,
});

export const cancelReservation = (rocketId) => ({
  type: CANCEL_RESERVATION,
  payload: rocketId,
});

export default fetchSelectedRockets;
