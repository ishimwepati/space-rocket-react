// SelectedMissionsPage.js
import React from 'react';
import { useSelector } from 'react-redux';

const SelectedMissionsPage = () => {
  const selectedMissions = useSelector((state) => state.missions.missions.filter(
    (mission) => state.missions.missionStatus[mission.mission_id],
  ));

  return (
    <div className="selected-missions-container">
      <h2>Selected Missions</h2>
      <ul>
        {selectedMissions.map((mission) => (
          <li key={mission.mission_id}>{mission.mission_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedMissionsPage;
