// Home.js
import React from 'react';
import './Home.css';
import About from './About'
import Services from './Services';
import Connect from './Connect';
import Contact from './Contact';
import Feature from "./Feature";

const Home = () => {
  return (
    <>
    <div className="home-container">
    <h1 className='welcome'>Welcome to ByteSquareTech</h1>
      <img src="https://bytesquaretech.com/img/bytesquare.png" alt="ByteSquareTech Logo" className="logo" />
      
      {/* <p>Your trusted partner for all your tech needs.</p> */}
      <div className="mid-content">
        <p className='head'>END TO END SOLUTIONS</p>
        <p className='head'>WE CREATE AND DELIVER</p>
      </div>
      {/* <p>Explore our services and discover a new world of possibilities.</p> */}
     
    </div>
    <Services/>
    <About/>
    <Connect/>
    <Feature/>
    <Contact/>
    </>
    
  );

};

export default Home;
