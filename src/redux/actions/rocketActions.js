// src/redux/actions/rocketActions.js

import axios from 'axios';
import { FETCH_SELECTED_ROCKETS } from './types';

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

export default fetchSelectedRockets;
