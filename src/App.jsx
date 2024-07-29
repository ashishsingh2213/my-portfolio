import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Footer from './components/Footer';
import NavLinks from './components/NavLinks';
import Contact from './components/Contact';
import About from './components/About';
import Work from './components/Work';
import Home from './components/Home';
import WorkLink from './components/WorkLink';
import AboutLink from './components/AboutLink';
import ContactLink from './components/ContactLink';
import CircleText from './components/CircleText';
import "./App.css"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="main">
      <Router>
        <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
        <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkLink />} />
          <Route path="/about" element={<AboutLink />} />
          <Route path="/contact" element={<ContactLink />} />
          <Route path="/contact" element={<Page1 />} />
          <Route path="/contact" element={<Page2 />} />
          <Route path="/contact" element={<Page3 />} />
          <Route path="/contact" element={<Page4 />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
