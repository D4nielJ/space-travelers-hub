import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../features/rockets/rockets';
import Missions from '../features/missions/missions';
import Profile from '../features/profile/profile';
import store from '../app/store';

describe('Tests snapshots of components', () => {
  it('renders correctly', () => {
    const rocketsTree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(rocketsTree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const missionsTree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(missionsTree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const profileTree = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(profileTree).toMatchSnapshot();
  });
});
