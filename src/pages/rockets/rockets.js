// src/pages/rockets/rockets.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelectedRockets, reserveRocket, cancelReservation } from '../../redux/actions/rocketActions';
import './rockets.css';

function Rockets() {
  const dispatch = useDispatch();
  const selectedRockets = useSelector((state) => state.rocketReducer.selectedRockets);

  useEffect(() => {
    dispatch(fetchSelectedRockets());
  }, [dispatch]);

  const handleReserveClick = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  const handleCancelClick = (rocketId) => {
    dispatch(cancelReservation(rocketId));
  };

  return (
    <div className="rocket-body">
      <h2>Checkout Available Rockets</h2>
      <ul className="rocket-list">
        {selectedRockets.map((rocket) => (
          <li key={rocket.id} className="rocket-item">
            <img
              src={rocket.flickr_images[0]}
              alt={rocket.rocket_name}
              className="rocket-image"
            />
            <div className="rocket-details">
              <h3 className="rocket-name">{rocket.name}</h3>
              <p className="rocket-description">
                <span className="reserved-word">{rocket.reserved ? ' \u00A0 Reserved\u00A0 ' : ''}</span>
                {rocket.description}
              </p>
              {rocket.reserved ? (
                <button
                  type="button" // Add type attribute
                  className="cancel-reservation-button"
                  onClick={() => handleCancelClick(rocket.id)}
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  type="button" // Add type attribute
                  className="reserve-rocket-button"
                  onClick={() => handleReserveClick(rocket.id)}
                >
                  Reserve Rocket
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
