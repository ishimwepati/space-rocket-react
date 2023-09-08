// src/components/Missions.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, toggleMissionStatus } from '../../redux/missionsSlice'; // Import the new action
import './missions.css';
import spinner from '../../img/Spinner-5.gif';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const missionStatus = useSelector((state) => state.missions.missionStatus); // Add missionStatus
  const status = useSelector((state) => state.missions.status);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  // Update the toggleStatus function to dispatch the toggleMissionStatus action
  const toggleStatus = (missionId) => {
    dispatch(toggleMissionStatus({ missionId }));
  };

  let content = '';

  if (status === 'loading') {
    content = <div className="spinnerCont"><img src={spinner} alt="Loading Icon" /></div>;
  } else if (status === 'failed') {
    content = (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  } else {
    content = (
      <div>
        <table className="missions-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td><strong>{mission.mission_name}</strong></td>
                <td>{mission.description}</td>
                <td>
                  {missionStatus[mission.mission_id] ? (
                    <span className="activeMember">Active member</span>
                  ) : (
                    <span className="notAMemeber">Not a member</span>
                  )}
                </td>
                <td>
                  <button
                    className={missionStatus[mission.mission_id] ? 'leaveBtn' : 'joinBtn'}
                    type="button"
                    onClick={() => toggleStatus(mission.mission_id)}
                  >
                    {missionStatus[mission.mission_id] ? 'Leave Mission' : 'Join Mission'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return content;
};

export default Missions;
