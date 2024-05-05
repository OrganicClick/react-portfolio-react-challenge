import React from 'react';

const Resume = () => {
  return (
    <div className="resume-container">
      {/* Resume Content */}
      <section className="resume-section">
        <h2 className="resume-heading">Resume</h2>
        <p className="resume-download">Download my resume <a href="/Module-20-Resume.pdf" download className="resume-link">here</a>.</p>
        
        {/* List of Proficiencies */}
        <div className="proficiencies-container">
          <h3 className="proficiencies-heading">Proficiencies</h3>
          <ul className="proficiencies-list">
            <li className="proficiency-item">HTML</li>
            <li className="proficiency-item">CSS</li>
            <li className="proficiency-item">JavaScript</li>
            <li className="proficiency-item">GitHub</li>
            <li className="proficiency-item">React</li>
            <li className="proficiency-item">Mongoose</li>
            <li className="proficiency-item">MongoDB</li>
            <li className="proficiency-item">Insomnia</li>
            {/* Add more proficiencies as needed */}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
