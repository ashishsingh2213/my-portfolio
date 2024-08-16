import React from 'react';
import { Link } from 'react-router-dom';
import ashii from '../image/profile.jpeg'; // Corrected import syntax

const Page1 = () => {
  const handleDownloadResume = () => {
    // Trigger the download by navigating to the file URL
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="page1" id='page1'>
      <div className="left-page1">
        <div className="heading-info">
          <h1>Creative Front-End Developer.</h1>
        </div>
        <div className="developer-info">
          <p>Hello, I’m Ashish, I support designers and agencies with creative development</p>
        </div>
        <div className="button-info1">
          <button to="/contact" className="btn1">Let's Talk</button>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"></a>
          <button to="/resume" className="btn2" onClick={handleDownloadResume}>View Resume</button>
        </div>
      </div>
      <div className="right-page1">
        <div className="profile-img-info">
          <img src={ashii} alt="Ashish Profile" /> {/* Added alt attribute */}
          <div className="social-link">
            <Link to="https://www.instagram.com/123/" target='_blank' className="social-icon">
              <i className="ri-instagram-line"></i>
            </Link>
            <Link to="https://www.linkedin.com/in/ashish-singh-a703692ba/" target='_blank' className="social-icon">
              <i className="ri-linkedin-fill"></i>
            </Link>
            <Link to="https://github.com/ashishsingh2213" target='_blank' className="social-icon">
              <i className="ri-github-fill"></i>
            </Link>
            <Link to="https://x.com/ashishs40385576?t=MerjTlJbaiIQmscXWpq6UQ&s=09" target='_blank' className="social-icon">
              <i className="ri-twitter-x-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
