import React from 'react';
import { Link } from 'react-router-dom';

function LoggedInContent() {
  return (
    <div>
      <h2>Welcome to the Logged-in Area</h2>
      <p>Choose your classification:</p>
      <ul>
        <li><Link to="/freshman">~ Freshman</Link></li>
        <li><Link to="/sophomore">~ Sophomore</Link></li>
        <li><Link to="/junior">~ Junior</Link></li>
        <li><Link to="/senior">~ Senior</Link></li>
      </ul>
      
      {/* Video */}

    </div>
  );
}

export default LoggedInContent;
