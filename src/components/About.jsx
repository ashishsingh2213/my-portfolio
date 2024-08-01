import React from 'react';
import "../styles/about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-heading1">
        <h1>About</h1>
        <div className="about-heading1-icon">
          <span className="material-symbols-outlined">call_received</span>
        </div>
      </div>
      <div className="about-heading1-info">
        <div className="about-heading1-info-para">
          <h1>
            I am an award-winning product designer specialized in UX/UI that
            lives in India with over 3 years of experience
          </h1>
          <p>
            I work from the user experience to the visual details and then
            transform these into working code. I am a minimal designer and I
            really like the simple and elegant style. I have worked with a range
            of clients focusing on web apps and platforms with Tesla in
            partnership with Microsoft.
          </p>
        </div>
      </div>
      <div className="about-info1-img">
        <img
          src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=2048x2048&w=is&k=20&c=yif473DFhN451o-tNC1tASFFoP5QTOYcqS26dhEbv6U="
          alt="Portrait of young man"
        />
      </div>
      <div className="exp-proj-clt">
        <div className="exp-info">
          <h1>3 <span>+</span></h1>
          <p>Years of Experience</p>
        </div>
        <div className="proj-info">
          <h1>20+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="clt-info">
          <h1>12+</h1>
          <p>Satisfied Clients Worldwide</p>
        </div>
      </div>
      <div className="about-experience1-info">
        <div className="about-experience1-heading">
          <h3>Work Experience</h3>
        </div>
        <div className="product-designer-info">
          <div className="designer-postname">
            <h3>Senior Product Designer</h3>
          </div>
          <div className="designer-location">
            <p>Wazobia Technologies, United Kingdom</p>
          </div>
          <div className="designer-workingtime">
            <p>October 2022 - Present</p>
          </div>
        </div>
        <div className="ui-ux-info">
          <div className="ui-postname">
            <h3>UI/UX Designer</h3>
          </div>
          <div className="ui-location">
            <p>Labsmart Healthcare Technologies, India</p>
          </div>
          <div className="ui-workingtime">
            <p>January 2021 - November 2021</p>
          </div>
        </div>
      </div>
      <div className="about-service-info">
        <div className="about-service-heading">
          <h3>My Service</h3>
        </div>
        <div className="product-design-info">
          <div className="product-design-heading">
            <h3>Product Design</h3>
            <p>
              I help brands generate revenue by solving user-centered problems
              through seamless digital designs.
            </p>
          </div>
        </div>
        <div className="product-design-info">
          <div className="product-design-heading">
            <h3>Web Design</h3>
            <p>
              I help brands generate revenue by solving user-centered problems
              through seamless digital designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
