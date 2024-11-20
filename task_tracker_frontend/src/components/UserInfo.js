import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/images/styles/UserInfo.css';


const UserInfo = () => {
    const navigate = useNavigate();

    // Retrieve user info from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        // Clear localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Redirect to login page
        navigate('/login');
    };

    // If no user is logged in, don't render anything
    if (!user) return null;

    return (
        <div className="user-info">
            <div className="user-status">
                <span className="status-dot"></span>
                <p>
                    Welcome, <strong>{user.name}</strong>
                </p>
            </div>
            <p>{user.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserInfo;
