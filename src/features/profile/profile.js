import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const missionsJoined = missions.filter((mission) => mission.status === true);
  const missionsContent = () => {
    if (missionsJoined.length === 0) {
      return <li className="p-6 font-medium">Join missions to start</li>;
    }
    return missionsJoined.map((mission) => (
      <li className="p-6 font-medium border-b-2" key={mission.missionId}>
        {mission.name}
      </li>
    ));
  };

  const rockets = useSelector((state) => state.rockets.list);
  const rocketsBooked = rockets.filter((el) => el.booking === true);
  const rocketsContent = () => {
    if (rocketsBooked.length === 0) {
      return <li className="p-6 font-medium">Reserve a Rocket</li>;
    }
    return rocketsBooked.map((el) => (
      <li className="p-6 font-medium border-b-2" key={el.id}>
        {el.name}
      </li>
    ));
  };

  return (
    <section className="flex justify-around">
      <div className="w-1/2">
        <h2 className="font-semibold text-xl mb-4">My Missions</h2>
        <ul className="border rounded">{missionsContent()}</ul>
      </div>
      <div className="w-1/2 ml-8">
        <h2 className="font-semibold text-xl mb-4">My Rockets</h2>
        <ul className="border rounded">{rocketsContent()}</ul>
      </div>
    </section>
  );
};

export default Profile;
