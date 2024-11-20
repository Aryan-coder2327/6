import React from 'react';
import Footer from '../components/Footer';
import '../assets/images/styles/Home.css';

// Import images
import manageTasksImg from '../assets/images/styles/manage-tasks.png';
import secureImg from '../assets/images/styles/secure.png';
import remindersImg from '../assets/images/styles/reminders.png';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Task Tracker</h1>
                <p>
                    Organize your tasks efficiently and stay on top of your schedule. Your productivity starts here!
                </p>
                <a href="/register" className="cta-button">Get Started</a>
            </header>
            <section className="features-section">
                <h2>Why Choose Us?</h2>
                <div className="features">
                    <div className="feature-card">
                        <img src={manageTasksImg} alt="Manage Tasks" />
                        <h3>Effortless Task Management</h3>
                        <p>Create, update, and track your tasks with ease.</p>
                    </div>
                    <div className="feature-card">
                        <img src={secureImg} alt="Secure" />
                        <h3>Secure and Reliable</h3>
                        <p>Your data is safe with industry-standard security measures.</p>
                    </div>
                    <div className="feature-card">
                        <img src={remindersImg} alt="Reminders" />
                        <h3>Stay On Track</h3>
                        <p>Set reminders and never miss a deadline again.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
