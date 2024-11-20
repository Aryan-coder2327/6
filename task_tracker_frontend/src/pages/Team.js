import React from 'react';
import '../assets/images/styles/Team.css';
import teamImage1 from '../assets/images/styles/aryan.jpg'; // Replace with actual image paths
import teamImage2 from '../assets/images/styles/arnav.jpg';
import teamImage3 from '../assets/images/styles/anushka.jpg';

const Team = () => {
    const teamMembers = [
        {
            name: 'Aryan Tripathi',
            role: 'Backend and Database',
            image: teamImage1,
        },
        {
            name: 'Arnav Singh',
            role: 'Backend and Frontend',
            image: teamImage2,
        },
        {
            name: 'Anushka Singhal',
            role: 'Frontend',
            image: teamImage3,
        },
    ];

    return (
        <div className="team-container">
            <h1>Meet Our Team</h1>
            <p>We are a group of passionate individuals working together to bring you Task Tracker.</p>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div className="team-card" key={index}>
                        <img src={member.image} alt={member.name} className="team-image" />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
