import React from 'react'
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about');
  };

  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page2">
        <div className="about-heading">
            <h3 className='about-heading'>About me</h3>
        </div>
        <div className="about-info about-para">
            <p className='para-1'>As a developer, I strive to deliver to create beautiful, performant websites from stunning designs. I enjoy creating extremely visual and interactive experiences using any technology that will deliver the best results.</p>
            <p className='para-1'>With a background in project management and code testing, I work closely with design focused teams to build websites and microsites for companies and individuals. I have years of experience working and collaborating on product teams and leading engineering efforts.</p>
            <div className="button-info2">
                <button className='btn-a' onClick={handleNavigate}>About me</button>
                <button className="btn-b" onClick={handleDownloadResume}>View Resume</button>
            </div>
        </div>
    </div>
  )
}

export default Page2
