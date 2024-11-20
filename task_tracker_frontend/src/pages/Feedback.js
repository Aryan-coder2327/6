import React, { useState } from 'react';
import '../assets/images/styles/Feedback.css';

const Feedback = () => {
    const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch('http://localhost:5000/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', feedback: '' });
                console.log('Feedback submitted successfully!');
            } else {
                const data = await response.json();
                setError(data.error || 'Failed to submit feedback');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
            console.error('Error:', err);
        }
    };

    return (
        <div className="feedback-container">
            <h1>Feedback</h1>
            <p>We value your feedback! Let us know how we're doing.</p>
            {error && <p className="error-message">{error}</p>}
            {submitted && <p className="success-message">Thank you for your feedback!</p>}
            <form onSubmit={handleSubmit} className="feedback-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your Email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="feedback">Feedback</label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        required
                        placeholder="Your Feedback"
                    />
                </div>
                <button type="submit" className="feedback-button">Submit Feedback</button>
            </form>
        </div>
    );
};

export default Feedback;
