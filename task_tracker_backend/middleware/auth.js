const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to authenticate the user
const authenticate = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token from "Bearer <token>"

    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, 'secret'); // Ensure 'secret' matches your login/register secret
        req.user = decoded; // Attach the decoded token payload to the request
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authenticate;
