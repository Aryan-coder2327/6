import React from 'react';
import '../assets/images/styles/About.css';


const About = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Task Tracker</h1>
                <p>
                    Task Tracker is your ultimate productivity companion. Designed to help you manage your tasks 
                    efficiently, stay organized, and achieve your goals seamlessly.
                </p>
            </header>
            <section className="about-features">
                <h2>Our Mission</h2>
                <p>
                    To empower individuals and teams by simplifying task management through intuitive design and 
                    powerful features.
                </p>
                <div className="feature-cards">
                    <div className="feature-card">
                        <h3>Streamlined Workflow</h3>
                        <p>Manage all your tasks in one place, saving you time and effort.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Secure Data</h3>
                        <p>We ensure that your data is safe with industry-standard encryption.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Collaboration</h3>
                        <p>Perfect for teams to track shared tasks and achieve goals together.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
