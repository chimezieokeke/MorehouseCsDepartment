// Server-side code (e.g., app.js)
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// In-memory database (for demonstration purposes, replace with a real database)
const users = [];

// Route handler for the POST request to /api/signup
app.post('/api/signup', (req, res) => {
  // Extract username and password from the request body
  const { username, password } = req.body;

  // Check if the username already exists in the database
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    // Username already exists, send a 409 Conflict response
    return res.status(409).send('Username already exists');
  }

  // Create a new user object and add it to the database
  const newUser = { username, password };
  users.push(newUser);

  // Respond with a success message
  res.status(201).send('User created successfully');
});

// Route handler for the POST request to /api/login
app.post('/api/login', (req, res) => {
  // Handle the login logic here
  // This could involve checking the username and password against a database
  // For now, let's assume a simple authentication logic
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    // Authentication successful, send a success response
    res.sendStatus(200);
  } else {
    // Authentication failed, send a 401 Unauthorized response
    res.status(401).send('Invalid credentials');
  }
});

// Other routes and middleware...

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
