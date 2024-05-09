import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import LoggedInContent from './LoggedInContent';
import Freshman from './Freshman';
import SophomorePage from './SophomorePage';
import JuniorPage from './JuniorPage';
import SeniorPage from './SeniorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loggedin" element={<LoggedInContent />} />
        <Route path="/freshman" element={<Freshman />} />
        <Route path="/sophomore" element={<SophomorePage />} />
        <Route path="/junior" element={<JuniorPage />} />
        <Route path="/senior" element={<SeniorPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
