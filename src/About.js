// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>Who We Are</h1>
        <p className='para'>We live with innovations. We believe in a collaborative work environment that leads to increased creativity and out-of-the-box thinking, more flexibility in project direction, increased learning possibilities, higher employee productivity, greater geographical spread, and enhanced customer relationships. We create and deliver end-to-end solutions to our customers. Our areas of expertise are software development, test automation, cloud services, DevOps services, and everything in between!</p>
      </div>
      <div className="about-image">
        <img src="https://bytesquaretech.com/img/icons/who%20we%20r.jpg" alt="Who We Are" />
      </div>
    </div>
  );
};

export default About;
