const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

// Initialize app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/contact', require('./routes/contact')); // Contact route
app.use('/api/feedback', require('./routes/feedback')); // Feedback route

// Basic Route for Home
app.get('/', (req, res) => {
    res.send('Welcome to Task Tracker API');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
