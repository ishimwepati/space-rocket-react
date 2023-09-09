import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Missions from '../pages/missions/missions';
import store from '../redux/store';

test('renders Missions component without errors', () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
});
