import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/images/styles/Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <h1>Task Tracker</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/tasks">Task Manager</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
