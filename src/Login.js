import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission

    try {
      // Send a POST request to the server-side login route
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Redirect to the logged-in page if login is successful
        history('/loggedin');
      } else {
        // Show error message if login fails
        alert('Invalid Credentials')
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle any network or server errors
      alert('An error occurred during login. Please try again later.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form submission

    try {
      // Send a POST request to the server-side signup route
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: signupUsername, password: signupPassword }),
      });

      if (response.ok) {
        // Redirect to the logged-in page if signup is successful
        history('/loggedin');
      } else {
        // Show error message if signup fails
        alert('Sign-up failed. Please try again.')
      }
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle any network or server errors
      alert('An error occurred during sign-up. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div>
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="username" className="login-label">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
          />
          <label htmlFor="password" className="login-label">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
      <div>
        <h2 className="signup-title">Sign Up</h2>
        <form className="login-form" onSubmit={handleSignup}>
          <label htmlFor="signup-username" className="login-label">Username:</label>
          <input
            type="text"
            id="signup-username"
            value={signupUsername}
            onChange={(e) => setSignupUsername(e.target.value)}
            required
            className="login-input"
          />
          <label htmlFor="signup-password" className="login-label">Password:</label>
          <input
            type="password"
            id="signup-password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
