// src/pages/rockets/rockets.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelectedRockets } from '../../redux/actions/rocketActions';
import './rockets.css';

function Rockets() {
  const dispatch = useDispatch();
  const selectedRockets = useSelector((state) => state.rocketReducer.selectedRockets);

  useEffect(() => {
    dispatch(fetchSelectedRockets());
  }, [dispatch]);

  return (
    <div className="rocket_body">
      <h2>Checkout Available Rocket </h2>
      <ul>
        {selectedRockets.map((rocket) => (
          <li key={rocket.id} className="rocket-item">
            <img
              src={rocket.flickr_images[0]} // Use the appropriate image source
              alt={rocket.rocket_name}
              className="rocket-image"
            />
            <div className="rocket-details">
              <h3 className="rocket-name">
                {' '}
                {' '}
                {' '}
                {rocket.name}
              </h3>
              <p className="rocket-description">{rocket.description}</p>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Rockets;
