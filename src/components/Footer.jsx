
import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer-info">
      <button onClick={scrollToTop} className="up-arrow-button">
      <i class="fa-solid fa-arrow-up"></i>
      </button>
      <p>&#169;Fabulous Jay, 2023 <span className='footer-span'>Design by Ashish <i class="fa-solid fa-arrow-up"></i></span></p>
    </div>
  );
};

export default Footer;

