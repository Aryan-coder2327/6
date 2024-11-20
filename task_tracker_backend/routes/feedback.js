const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Route to handle feedback form submissions
router.post('/', async (req, res) => {
    const { name, email, feedback } = req.body;

    try {
        const newFeedback = new Feedback({ name, email, feedback });
        await newFeedback.save(); // Save the feedback to the database
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ error: 'Failed to submit feedback' });
    }
});

module.exports = router;
