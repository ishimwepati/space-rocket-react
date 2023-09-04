
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Rockets from './pages/Rockets'; 
import Missions from './pages/Missions';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/rockets" component={Rockets} /> 
      <Route path="/missions" component={Missions} />
      <Route path="/profile" component={Profile} /> 
    </Router>
  );
}

export default App;
