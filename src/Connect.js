import React from 'react';
import './connect.css';

const Connect = () => {
  return (
    <div className="connect-container">
      <div className="connect-form">
        <h1>Get In Touch With Us</h1>
        <form>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="connect-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHRDAeBT2mRfi8cYEuKp2yyXdZm2s0OC5iUA&usqp=CAU" alt="Connect Image" />
      </div>
    </div>
  );
};

export default Connect;
