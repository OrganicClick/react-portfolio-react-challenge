import React from 'react';
import '../App.css'; // Import your App.css file from the src directory
import profilePicture from '../assets/profile-picture.jpg'; // Update the import path to access the assets directory directly

const About = () => {
    return (
        <div className='about-container'>
            <div className='profile-picture'>
                <img src={profilePicture} alt='Profile' className='profile-img' />
            </div>
            <div className='about-content'>
                <h1 className='about-title'>About Me</h1>
                <p className='about-bio'>
                I'm Austin Luper, a passionate and dedicated aspiring developer with a keen interest in creating innovative solutions that make a positive impact. My journey into the world of development began with my fascination for technology and its potential to transform lives.

I am still actively learning but I have developed a solid understanding of HTML, CSS, and JavaScript, and I'm continuously expanding my skills to include more advanced technologies like React.js, Node.js, and MongoDB.

Outside of coding, you'll find me exploring the latest tech trends, contributing to open-source projects, and honing my problem-solving skills through coding challenges and hackathons. I'm excited to leverage my passion for technology and my commitment to continuous learning to contribute meaningfully to the ever-evolving field of software development.

Let's connect and explore how we can create something extraordinary together!

                </p>
            </div>
        </div>
    );
};

export default About;
