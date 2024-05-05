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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper, velit ac feugiat bibendum,
                    turpis elit malesuada libero, sit amet eleifend urna risus id neque. Nulla facilisi. Suspendisse potenti.
                    In hac habitasse platea dictumst. Integer tincidunt imperdiet magna, nec eleifend nunc fermentum eget.
                    Donec ultricies augue vitae felis rutrum, at congue nulla posuere. Sed feugiat dui non purus dictum
                    dignissim. Integer euismod dapibus eros ac fringilla.
                </p>
            </div>
        </div>
    );
};

export default About;
