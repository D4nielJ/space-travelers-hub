import { useSelector } from 'react-redux';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);

  const createMissions = () =>
    missions.map((mission) => (
      <tr>
        <th>{mission.name}</th>
        <th>{mission.description}</th>
        <th>{mission.status ? 'Active member' : 'Not a member'}</th>
        <th>{mission.status ? <button>Leave mission</button> : <button>Join mission</button>}</th>
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
