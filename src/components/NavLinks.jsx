import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navlinks' style={{ top: isOpen ? '5rem' : '-24rem' }}>
      <ul>
        <li>
          <NavLink
            onClick={toggleMenu}
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={toggleMenu}
            to="/work"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={toggleMenu}
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={toggleMenu}
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
