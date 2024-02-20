import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Bytesquare Technologies India Pvt. Ltd.</h3>
          <p><FaMapMarkerAlt />Global Business Hub, Eon Free Zone, Office No:-704 Kharadi, Pune-411014.</p>
          <p> Pune, India</p>
        </div>
        <div className="footer-contact">
          <p><FaPhone /> <a href="tel:+919881250347">+91-9881250347</a></p>
          <p><FaEnvelope /> <a href="mailto:hr@bytesquaretech.com">hr@bytesquaretech.com</a></p>
        
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; Bytesquare Technologies India Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
