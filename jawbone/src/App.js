// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LiveGames from './components/LiveGames';
import UpcomingGames from './components/UpcomingGames';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/live-games">Live Games</Link>
            </li>
            <li>
              <Link to="/upcoming-games">Upcoming Games</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/live-games" element={<LiveGames />} />
          <Route path="/upcoming-games" element={<UpcomingGames />} />
          <Route path="/" element={<LiveGames />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
