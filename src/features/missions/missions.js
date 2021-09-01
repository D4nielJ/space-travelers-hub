import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, updateMissions } from './missionsSlice';

const styles = {
  th: 'border border-gray-400 py-2 px-2',
  thTitle: 'border border-gray-400 py-2 px-2 text-lg text-bold',
};

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
    const { id } = e.target.parentNode.parentNode;
    dispatch(updateMissions(id));
  };

  const createMissions = () => missions.map((mission) => (
    <tr id={mission.missionId} key={mission.missionId} className="mission-row">
      <th className={`${styles.thTitle} w-40`}>{mission.name}</th>
      <th className={`${styles.th}`}>{mission.description}</th>
      <th className={`${styles.th} w-40 text-center`}>
        {mission.status ? (
          <div className="bg-green-400 rounded-md px-2 py-0.5 mr-2 text-white font-semibold tracking-wide text-sm">
            Active member
          </div>
        ) : (
          <div className="bg-gray-600 rounded-md px-2 py-0.5 mr-2 text-white font-semibold tracking-wide text-sm">
            Not a member
          </div>
        )}
      </th>
      <th className={`${styles.th} w-40 text-center`}>
        {mission.status ? (
          <button
            className="text-red-600 border-red-600 border py-2 px-4 rounded-md"
            onClick={handleUpdateMissionBtn}
            type="button"
          >
            Leave mission
          </button>
        ) : (
          <button
            className="text-gray-600 border-gray-600 border py-2 px-4 rounded-md"
            onClick={handleUpdateMissionBtn}
            type="button"
          >
            Join mission
          </button>
        )}
      </th>
    </tr>
  ));

  return (
    <table className="border border-gray-400 text-left mb-16">
      <thead className="bg-gray-300">
        <tr>
          <th className={styles.thTitle}>Mission</th>
          <th className={styles.thTitle}>Description</th>
          <th className={styles.thTitle}>Status</th>
          <th className={styles.th}>&nbsp;</th>
        </tr>
      </thead>
      <tbody>{createMissions()}</tbody>
    </table>
  );
};

export default Missions;
