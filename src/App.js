import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Admin from './Pages/Admin';
import Products from './Pages/Products';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
    </Router>
  );
}

export default App;
