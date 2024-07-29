// import React from 'react'
// 
import React, { useState, useEffect } from 'react';

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
    <div className="navbar">
      
      <div className="left-side">
        <div className="left-img-logo">
          <img
            src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=2048x2048&w=is&k=20&c=yif473DFhN451o-tNC1tASFFoP5QTOYcqS26dhEbv6U="
            alt="Logo"
          />
        </div>
        <div className="center-logo-icon" onClick={toggleMenu}>
          {isOpen ? 'X' : '☰'}
        </div>
      </div>

      <div className="right-date-time-info">
        <div className="dateHeader">
          <span>{formatDate(currentDateTime)}</span>
        </div>
        <div className="dateHeader">
          <span>{formatTimeIST(currentDateTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
