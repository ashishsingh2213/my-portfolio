import React from 'react'
import { Link } from "react-router-dom"

const NavLinks = ({ isOpen, setIsOpen }) => {
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='navlinks' style={{ top: isOpen === false ? "-24rem" : "5rem" }}>
            <ul>
                <li><Link  onClick={toggleMenu} to="/">Home</Link></li>
                <li><Link onClick={toggleMenu} to="/work">Work</Link></li>
                <li><Link onClick={toggleMenu} to="/about">About</Link></li>
                <li><Link onClick={toggleMenu} to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavLinks

