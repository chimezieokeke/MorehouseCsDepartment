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
      <div>
        <h3>Watch this video to get a grasp of Computer Science @ Morehouse:</h3>
        <video controls width="500">
          <source src="/src/mov.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default LoggedInContent;
