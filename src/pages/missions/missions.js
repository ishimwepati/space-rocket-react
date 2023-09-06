// src/components/Missions.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.missions.status);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div>
      <h2>SpaceX Missions</h2>
      <ul>
        {missions.map((mission) => (
          <li key={mission.mission_id}>
            <strong>Name:</strong>
            {' '}
            {mission.mission_name}
            {' '}
            <br />
            <strong>Description:</strong>
            {' '}
            {mission.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
