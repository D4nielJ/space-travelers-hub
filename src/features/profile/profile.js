import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const createMissions = () =>
    missions.map((mission) => {
      if (mission.status) {
        return <li key={mission.missionId}>{mission.name}</li>;
      }
    });
  
  return (
    <section className="profile">
      <div className="missions">
        <h2>My Missions</h2>
        <ul>{createMissions()}</ul>
      </div>
      <div className="rockets">
        <h2>My Rockets</h2>
        <ul>{/* {createRockets()} */}</ul>
      </div>
    </section>
  );
};

export default Profile;
