import React from 'react';
import { useNavigate } from 'react-router-dom';
import ashii from '../image/profile.jpeg'; // Corrected import syntax

const Page1 = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact');
  };

  const handleDownloadResume = () => {
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
          <button className="btn1" onClick={handleNavigate}>Let's Talk</button>
          <button className="btn2" onClick={handleDownloadResume}>View Resume</button>

        </div>
      </div>
      <div className="right-page1">
        <div className="profile-img-info">
          <img src={ashii} alt="Ashish Profile" />
          <div className="social-link">
            <a href="https://www.instagram.com/123/" target='_blank' rel='noopener noreferrer' className="social-icon">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://www.linkedin.com/in/ashish-singh-a703692ba/" target='_blank' rel='noopener noreferrer' className="social-icon">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="https://github.com/ashishsingh2213" target='_blank' rel='noopener noreferrer' className="social-icon">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://x.com/ashishs40385576?t=MerjTlJbaiIQmscXWpq6UQ&s=09" target='_blank' rel='noopener noreferrer' className="social-icon">
              <i className="ri-twitter-x-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
