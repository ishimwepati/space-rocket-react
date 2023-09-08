// SelectedMissionsPage.js
import React from 'react';
import { useSelector } from 'react-redux';

const SelectedMissionsPage = () => {
  const selectedMissions = useSelector((state) => state.missions.missions.filter(
    (mission) => state.missions.missionStatus[mission.mission_id],
  ));

  return (

    <table className="missions-table">
      <thead>
        <tr>
          <th>My Missions</th>
        </tr>
      </thead>
      <tbody>
        {selectedMissions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SelectedMissionsPage;
