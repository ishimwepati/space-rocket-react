// this is mmy src/redux/reducers/rocketReducer.js
import { FETCH_SELECTED_ROCKETS, RESERVE_ROCKET, CANCEL_RESERVATION } from '../actions/types';

const initialState = {
  selectedRockets: [],
  reservedRockets: [],
};

const rocketReducer = (state = initialState, action) => {
  let reservedId;
  let canceledId;

  switch (action.type) {
    case FETCH_SELECTED_ROCKETS:
      return {
        ...state,
        selectedRockets: action.payload.map((rocket) => ({
          ...rocket,
          reserved: state.reservedRockets.includes(rocket.id),
        })),
      };
    case RESERVE_ROCKET:
      reservedId = action.payload;
      return {
        ...state,
        // eslint-disable-next-line
        selectedRockets: state.selectedRockets.map((rocket) => (rocket.id === reservedId ? { ...rocket, reserved: true } : rocket)),
        reservedRockets: [...state.reservedRockets, reservedId],
      };
    case CANCEL_RESERVATION:
      canceledId = action.payload;
      return {
        ...state,
        // eslint-disable-next-line
        selectedRockets: state.selectedRockets.map((rocket) => (rocket.id === canceledId ? { ...rocket, reserved: false } : rocket)),
        reservedRockets: state.reservedRockets.filter((rocketId) => rocketId !== canceledId),
      };
    default:
      return state;
  }
};

export default rocketReducer;
