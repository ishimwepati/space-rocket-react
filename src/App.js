// my App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/header';
import Rockets from './pages/rockets/rockets';
import Missions from './pages/missions/missions';
import Profile from './pages/profile/profile';

function App() {
  return (
    <Provider store={store}>
      {' '}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          {' '}
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
