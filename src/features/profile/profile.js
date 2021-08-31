import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const missionsJoined = missions.filter((mission) => mission.status === true);
  const missionsContent = () => {
    if (missionsJoined.length === 0) {
      return <li>Join missions to start</li>;
    }
    return missionsJoined.map((mission) => <li key={mission.missionId}>{mission.name}</li>);
  };

  const rockets = useSelector((state) => state.rockets.list);
  const rocketsBooked = rockets.filter((el) => el.booking === true);
  const rocketsContent = () => {
    if (rocketsBooked.length === 0) {
      return <li>Reserve a Rocket</li>;
    }
    return rocketsBooked.map((el) => <li key={el.id}>{el.name}</li>);
  };

  return (
    <section className="profile">
      <div className="missions">
        <h2>My Missions</h2>
        <ul>{missionsContent()}</ul>
      </div>
      <div className="rockets">
        <h2>My Rockets</h2>
        <ul>{rocketsContent()}</ul>
      </div>
    </section>
  );
};

export default Profile;
