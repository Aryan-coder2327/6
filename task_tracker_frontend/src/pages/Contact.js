import React, { useState } from 'react';
import '../assets/images/styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                console.log('Message saved successfully!');
            } else {
                const data = await response.json();
                setError(data.error || 'Failed to save message');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
            console.error('Error:', err);
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>We’d love to hear from you! Fill out the form below to get in touch.</p>
            {error && <p className="error-message">{error}</p>}
            {submitted && <p className="success-message">Thank you! We'll get back to you soon.</p>}
            <form onSubmit={handleSubmit} className="contact-form">
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
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your Message"
                    />
                </div>
                <button type="submit" className="contact-button">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
