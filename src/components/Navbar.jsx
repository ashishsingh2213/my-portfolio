import React, { useState, useEffect } from 'react';
import ashii from '../image/profile.jpeg';


const Navbar = ({ toggleMenu, isOpen }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTimeIST = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Kolkata',
      hour12: true
    };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  };

  return (
    <div className="navbar" id="Navbar">
      <div className="left-side">
        <div className="left-img-logo">
          <img
            src={ashii}
          />
        </div>
        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="right-date-time-info">
        <div className="dateHeader1">
          <span>{formatDate(currentDateTime)}</span>
        </div>
        <div className="dateHeader2">
          <span>{formatTimeIST(currentDateTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
