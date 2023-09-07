// my src/pages/profile/profile.js

import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

function Profile() {
  // eslint-disable-next-line
  const reservedRockets = useSelector((state) => state.rocketReducer.selectedRockets.filter((rocket) => rocket.reserved));

  return (
    <div className="profile-body">
      <h2>Your Reserved Rockets</h2>
      <table className="rocket-table">
        <thead>
          <tr>
            <th>Rocket Name</th>
          </tr>
        </thead>
        <tbody>
          {reservedRockets.map((rocket) => (
            <tr key={rocket.id}>
              <td>{rocket.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
