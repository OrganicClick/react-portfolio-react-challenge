import React from 'react';

const Resume = () => {
  return (
    <div>
      {/* Resume Content */}
      <section>
        <h2>Resume</h2>
        <p>Download my resume <a href="/path/to/resume.pdf" download>here</a>.</p>
        
        {/* List of Proficiencies */}
        <h3>Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          {/* Add more proficiencies as needed */}
        </ul>
      </section>
    </div>
  );
};

export default Resume;
