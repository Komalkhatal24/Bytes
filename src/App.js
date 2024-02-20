// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About";
import Services from './Services';
import Connect from "./Connect"
import Contact from "./Contact"
import Feature from './Feature';
const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home/>
      <About/> */}
      


<Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/contact' element={<Contact />} />

        {/* <Route path='/features' element={<Features/>} /> */}


      </Routes>
    </>
  );
};

export default App;
