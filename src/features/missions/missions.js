import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from './missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsStatus = useSelector((state) => state.missions.status);
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (missionsStatus === 'idle') {
      dispatch(fetchMissions());
    }
  }, []);

  const createMissions = () => missions.map((mission) => (
    <tr key={mission.missionId}>
      <th>{mission.name}</th>
      <th>{mission.description}</th>
      <th>{mission.status ? 'Active member' : 'Not a member'}</th>
      <th>
        {mission.status ? (
          <button type="button">Leave mission</button>
        ) : (
          <button type="button">Join mission</button>
        )}
      </th>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{createMissions()}</tbody>
    </table>
  );
};

export default Missions;
