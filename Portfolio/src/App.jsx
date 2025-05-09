import React from 'react';
import Home from "./pages/Home";
import About  from './pages/About';
import Projects  from './pages/Projects';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

function App () {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path = "/" element ={<Home />} /> 
        <Route path = "/about" element ={<About />} /> 
        <Route path = "/projects" element ={<Projects />} /> 
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
