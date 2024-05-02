import React from 'react';

const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <nav>
      <ul>
        <li className={currentPage === 'About' ? 'active' : ''} onClick={() => handlePageChange('About')}>
          About Me
        </li>
        <li className={currentPage === 'Portfolio' ? 'active' : ''} onClick={() => handlePageChange('Portfolio')}>
          Portfolio
        </li>
        <li className={currentPage === 'Contact' ? 'active' : ''} onClick={() => handlePageChange('Contact')}>
          Contact
        </li>
        <li className={currentPage === 'Resume' ? 'active' : ''} onClick={() => handlePageChange('Resume')}>
          Resume
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
