const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController'); // Import controller functions
const authenticate = require('../middleware/auth'); // Import authentication middleware

const router = express.Router();

// Get all tasks for a user
router.get('/', authenticate, getTasks);

// Create a task
router.post('/', authenticate, createTask);

// Update a task
router.put('/:id', authenticate, updateTask);

// Delete a task
router.delete('/:id', authenticate, deleteTask);

module.exports = router;
