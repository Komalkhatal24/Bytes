// Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div>
    <h1 className='service'>Services</h1>
    <div className="services-container">
    
      <div className="service-card">
        <div className="service-card-header">Software Development</div>
        <div className="service-card-body">
          <p className="service-card-description">
            Software development of products with new or different characteristics that offer new or additional benefits to the customer. Software development is the collective processes involved in creating software programs, embodying all the stages throughout the systems development life cycle.
          </p>
          <a href="#" className="service-card-link">Learn more</a>
        </div>
      </div>
      <div className="service-card">
        <div className="service-card-header">Test Automation</div>
        <div className="service-card-body">
          <p className="service-card-description">
            Automation testing is the method of testing in which we can test applications. We can completely reduce human interventions by implementing continuous integration and continuous delivery.
          </p>
          <a href="#" className="service-card-link">Learn more</a>
        </div>
      </div>
      <div className="service-card">
        <div className="service-card-header">Outsourcing</div>
        <div className="service-card-body">
          <p className="service-card-description">
            Outsourcing is a practice used by us to reduce costs by transferring portions of work to outside suppliers rather than completing it internally. Outsourcing is an effective cost-saving strategy when used properly.
          </p>
          <a href="#" className="service-card-link">Learn more</a>
        </div>
      </div>
      <div className="service-card">
        <div className="service-card-header">DevOps/Cloud</div>
        <div className="service-card-body">
          <p className="service-card-description">
            DevOps is a set of practices that combines software development and information-technology operations which aims to shorten the systems development life cycle and provide continuous delivery with high software quality.
          </p>
          <a href="#" className="service-card-link">Learn more</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
