import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Rockets from './pages/rockets/rockets';
import Missions from './pages/missions/missions';
import Profile from './pages/profile/profile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
