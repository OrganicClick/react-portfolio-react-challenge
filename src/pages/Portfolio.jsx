import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Portfolio Content */}
      <section className="portfolio-section">
        {/* Titled images of developer's applications */}
        <h2 className="portfolio-heading">Portfolio</h2>
        <div className="portfolio-grid">
          {/* Application 1 */}
          <div className="portfolio-item">
            <img src="/path/to/app1.png" alt="Application 1" className="app-image" />
            <div className="app-details">
              <h3 className="app-title">Application 1</h3>
              <p className="app-description">Description of Application 1</p>
              {/* Links to deployed application and GitHub repository */}
              <div className="app-links">
                <a href="https://example.com/app1" target="_blank" rel="noopener noreferrer" className="app-link">Visit App</a>
                <a href="https://github.com/user/app1" target="_blank" rel="noopener noreferrer" className="app-link">GitHub Repo</a>
              </div>
            </div>
          </div>

          {/* Application 2 */}
          <div className="portfolio-item">
            <img src="/path/to/app2.png" alt="Application 2" className="app-image" />
            <div className="app-details">
              <h3 className="app-title">Application 2</h3>
              <p className="app-description">Description of Application 2</p>
              {/* Links to deployed application and GitHub repository */}
              <div className="app-links">
                <a href="https://example.com/app2" target="_blank" rel="noopener noreferrer" className="app-link">Visit App</a>
                <a href="https://github.com/user/app2" target="_blank" rel="noopener noreferrer" className="app-link">GitHub Repo</a>
              </div>
            </div>
          </div>

          {/* Application 3 */}
          <div className="portfolio-item">
            <img src="/path/to/app3.png" alt="Application 3" className="app-image" />
            <div className="app-details">
              <h3 className="app-title">Application 3</h3>
              <p className="app-description">Description of Application 3</p>
              {/* Links to deployed application and GitHub repository */}
              <div className="app-links">
                <a href="https://example.com/app3" target="_blank" rel="noopener noreferrer" className="app-link">Visit App</a>
                <a href="https://github.com/user/app3" target="_blank" rel="noopener noreferrer" className="app-link">GitHub Repo</a>
              </div>
            </div>
          </div>

          {/* Application 4 */}
          <div className="portfolio-item">
            <img src="/path/to/app4.png" alt="Application 4" className="app-image" />
            <div className="app-details">
              <h3 className="app-title">Application 4</h3>
              <p className="app-description">Description of Application 4</p>
              {/* Links to deployed application and GitHub repository */}
              <div className="app-links">
                <a href="https://example.com/app4" target="_blank" rel="noopener noreferrer" className="app-link">Visit App</a>
                <a href="https://github.com/user/app4" target="_blank" rel="noopener noreferrer" className="app-link">GitHub Repo</a>
              </div>
            </div>
          </div>

          {/* Application 5 */}
          <div className="portfolio-item">
            <img src="/path/to/app5.png" alt="Application 5" className="app-image" />
            <div className="app-details">
              <h3 className="app-title">Application 5</h3>
              <p className="app-description">Description of Application 5</p>
              {/* Links to deployed application and GitHub repository */}
              <div className="app-links">
                <a href="https://example.com/app5" target="_blank" rel="noopener noreferrer" className="app-link">Visit App</a>
                <a href="https://github.com/user/app5" target="_blank" rel="noopener noreferrer" className="app-link">GitHub Repo</a>
              </div>
            </div>
          </div>

          {/* Application 6 */}
          <div className="portfolio-item">
            <img src="/path/to/app6.png" alt="Application 6" className="app-image" />
            <div className="app-details">
              <h3 className="app-title">Application 6</h3>
              <p className="app-description">Description of Application 6</p>
              {/* Links to deployed application and GitHub repository */}
              <div className="app-links">
                <a href="https://example.com/app6" target="_blank" rel="noopener noreferrer" className="app-link">Visit App</a>
                <a href="https://github.com/user/app6" target="_blank" rel="noopener noreferrer" className="app-link">GitHub Repo</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Portfolio;
