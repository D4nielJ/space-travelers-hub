const initialState = {
  missions: [
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
  ],
  status: 'idle',
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
