import React from 'react';
import '../App.css'; // Import the CSS file

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Portfolio Content */}
      <section className="portfolio-section">
        {/* Centered Portfolio title */}
        <h2 className="portfolio-heading">Portfolio</h2>
        {/* User instruction */}
        <p className="scroll-instruction">Scroll down to see more applications</p>
        {/* Titled images of developer's applications */}
        <div className="portfolio-grid">
          {/* Application 1 */}
          <div className="portfolio-item">
            <img src="src/assets/Module-10-Screenshot.png" alt="SVG Generator Application" className="app-image" />
            <div className="app-details">
              <h3 className="app-title">SVG Generator Application</h3>
              <p className="app-description">An Object-oriented programming, back-end application that generates SVG logos.</p>
              {/* Links to deployed application and GitHub repository */}
              <div className="app-links">
                <a href="https://example.com/app1" target="_blank" rel="noopener noreferrer" className="app-link">Visit App</a>
                <a href="https://github.com/OrganicClick/Object-oriented-Programming-Challenge-Luper" target="_blank" rel="noopener noreferrer" className="app-link">GitHub Repo</a>
              </div>
            </div>
          </div>

          {/* Application 2 */}
          <div className="portfolio-item">
            <img src="src/assets/Module-11-Screenshot.png" alt="Note Taker Application" className="app-image" />
            <div className="app-details">
              <h3 className="app-title">Note Taker Application</h3>
              <p className="app-description">The Note Taker application is designed to help small business owners organize their thoughts and tasks by allowing them to write and save notes.</p>
              {/* Links to deployed application and GitHub repository */}
              <div className="app-links">
                <a href="https://express-js-note-taker-luper-b5a12dbdaca6.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="app-link">Visit App</a>
                <a href="https://github.com/OrganicClick/Express-js-Note-Taker-Challenge" target="_blank" rel="noopener noreferrer" className="app-link">GitHub Repo</a>
              </div>
            </div>
          </div>

          {/* Application 3 */}
          <div className="portfolio-item">
            <img src="src/assets/Module-12-Screenshot.png" alt="Employee Tracker Application" className="app-image" />
            <div className="app-details">
              <h3 className="app-title">Employee Tracker Application</h3>
              <p className="app-description">The Employee Tracker allows users to manage a company's employee database by performing various operations such as viewing employees, roles, and departments, adding new employees, updating employee roles, and deleting employees.</p>
              {/* Links to deployed application and GitHub repository */}
              <div className="app-links">
                <a href="https://github.com/OrganicClick/employee-tracker-sql-challenge" target="_blank" rel="noopener noreferrer" className="app-link">GitHub Repo</a>
              </div>
            </div>
          </div>

          {/* Application 4 */}
          <div className="portfolio-item">
            <img src="src/assets/Module-13-Screenshot.png" alt="E-commerce Platform Simulation" className="app-image" />
            <div className="app-details">
              <h3 className="app-title">E-commerce Platform Simulation</h3>
              <p className="app-description">The application is designed to simulate the functionality of an e-commerce platform by implementing models for products, categories, tags, and product tags.</p>
              {/* Links to deployed application and GitHub repository */}
              <div className="app-links">
                <a href="https://github.com/OrganicClick/e-commerce-back-end-challenge" target="_blank" rel="noopener noreferrer" className="app-link">GitHub Repo</a>
              </div>
            </div>
          </div>

          {/* Application 5 */}
          <div className="portfolio-item">
            <img src="src/assets/Module-5-Screenshot.png" alt="Calendar Application" className="app-image" />
            <div className="app-details">
              <h3 className="app-title">Calendar Application</h3>
              <p className="app-description">This is a simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.</p>
              {/* Links to deployed application and GitHub repository */}
              <div className="app-links">
                <a href="https://organicclick.github.io/Module-5-Challenge-Luper/" target="_blank" rel="noopener noreferrer" className="app-link">Visit App</a>
                <a href="https://github.com/OrganicClick/Module-5-Challenge-Luper" target="_blank" rel="noopener noreferrer" className="app-link">GitHub Repo</a>
              </div>
            </div>
          </div>

          {/* Application 6 */}
          <div className="portfolio-item">
            <img src="src/assets/Project-1-Screenshot.png" alt="Movie Trailers and Reviews Application" className="app-image" />
            <div className="app-details">
              <h3 className="app-title">Movie Trailers and Reviews Application</h3>
              <p className="app-description">Web application which provides reviews and a description, along with a trailer of a movie. Users can search for any movie they are interested in and will be provided with reviews, a description, and a cinematic trailer. I am one of the contributors to this application.</p>
              {/* Links to deployed application and GitHub repository */}
              <div className="app-links">
                <a href="https://yaserhdev.github.io/movie-trailers-and-reviews/" target="_blank" rel="noopener noreferrer" className="app-link">Visit App</a>
                <a href="https://github.com/yaserhdev/movie-trailers-and-reviews" target="_blank" rel="noopener noreferrer" className="app-link">GitHub Repo</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Portfolio;
