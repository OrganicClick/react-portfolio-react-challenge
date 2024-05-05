import React from 'react';
import '../../App.css'; // Import your App.css file
import profilePicture from '../../assets/profile-picture.jpg';

const About = () => {
    return (
        <div className='about-container'>
            <h1 className='about-title'>About Me</h1>
            <div className='about-content'>
                <div className='profile-picture'>
                    <img src={profilePicture} alt='Profile' style={{ width: '200px', height: '200px' }} />
                </div>
                <div className='bio'>
                    <p>
                        Insert short bio here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        ullamcorper, velit ac feugiat bibendum, turpis elit malesuada libero, sit amet eleifend
                        urna risus id neque.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
