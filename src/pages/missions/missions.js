// src/components/Missions.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missionsSlice';
import './missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.missions.status);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
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
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td>
                  <span className="notAMemeber"> Not a member </span>
                  <span className="activeMember"> Acive member </span>
                </td>
                <td>
                  <button className="joinBtn" type="button">Leave Mission </button>
                  {' '}
                  <button className="leaveBtn" type="button">Join Mission </button>
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
