// Import useState from 'react' and necessary components from their relative locations

import { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const PageContainer = () => {
    // Create a useState variable to hold the current page and set the default page to 'Portfolio'
    const [currentPage, setCurrentPage] = useState('Portfolio');
      // Function to render the current page based on state
     const renderPage = () => {
        switch (currentPage) {
        case 'About':
            return <About />;
        case 'Contact':
            return <Contact />;
        case 'Portfolio':
            return <Portfolio />;
        case 'Resume':
            return <Resume />;
        default:
            return null;
    }
  };
};

  // Function to handle page change
  const handlePageChange = (page) => setCurrentPage(page);
