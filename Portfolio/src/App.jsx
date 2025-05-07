import React from 'react';
import Home from "./pages/Home";
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<Home />} /> ;
        <Route path = "/about" element ={<About />} /> ;
        <Route path = "/projects" element ={<Projects />} /> ;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
