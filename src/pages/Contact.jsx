import React, { useState } from 'react';

const Contact = () => {
    // State variables to hold form field values and validation errors
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    // Regular expression for validating email address
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Reset error messages
        setNameError('');
        setEmailError('');
        setMessageError('');

        // Validate name field
        if (!name.trim()) {
            setNameError('Name is required');
        }

        // Validate email field
        if (!email.trim()) {
            setEmailError('Email is required');
        } else if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
        }

        // Validate message field
        if (!message.trim()) {
            setMessageError('Message is required');
        }

        // If all fields are valid, submit form
        if (name && email && message && emailRegex.test(email)) {
            // Your form submission logic goes here
            console.log('Form submitted successfully');
        }
    };

    return (
        <div className='contact-container'>
            <h1 className='contact-title'>Contact</h1>
            <div className='contact-form'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {nameError && <p className='error'>{nameError}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <p className='error'>{emailError}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>Message:</label>
                        <textarea
                            id='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        {messageError && <p className='error'>{messageError}</p>}
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
