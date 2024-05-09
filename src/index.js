
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// Replace ReactDOM.render with ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the root component using the createRoot API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
