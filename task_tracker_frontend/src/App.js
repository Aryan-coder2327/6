import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserInfo from './components/UserInfo'; 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Team from './pages/Team';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskManager from './pages/TaskManager';

function App() {
    return (
        <Router>
            <Navbar />
            <UserInfo /> {/* Display user info and logout */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/team" element={<Team />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/tasks" element={<TaskManager />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
