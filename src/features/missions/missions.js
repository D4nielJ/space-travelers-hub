const Missions = () => {
  const missions = [
    {
      missionId: 1,
      name: 'Thaicom',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias eius culpa maiores ex perspiciatis quas tempore inventore esse laborum ab.',
      status: null,
    },
    {
      missionId: 2,
      name: 'Telstar',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias eius culpa maiores ex perspiciatis quas tempore inventore esse laborum ab.',
      status: 'joined',
    },
    {
      missionId: 3,
      name: 'Iridium NEXT',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias eius culpa maiores ex perspiciatis quas tempore inventore esse laborum ab.',
      status: null,
    },
  ];

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
