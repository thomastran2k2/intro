import React from 'react';
import { HashRouter, BrowserRouter as Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        
      </div>
    </HashRouter>
  );
}

export default App;