import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, updateMissions } from './missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsStatus = useSelector((state) => state.missions.status);
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (missionsStatus === 'idle') {
      dispatch(fetchMissions());
    }
  }, []);

  const handleUpdateMissionBtn = (e) => {
    const id = e.target.parentNode.parentNode.id;
    dispatch(updateMissions(id));
  };

  const createMissions = () =>
    missions.map((mission) => (
      <tr id={mission.missionId} key={mission.missionId}>
        <th>{mission.name}</th>
        <th>{mission.description}</th>
        <th>{mission.status ? 'Active member' : 'Not a member'}</th>
        <th>
          {mission.status ? (
            <button onClick={handleUpdateMissionBtn} type="button">
              Leave mission
            </button>
          ) : (
            <button onClick={handleUpdateMissionBtn} type="button">
              Join mission
            </button>
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
