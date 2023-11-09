import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Admin from './Pages/Admin';
import Products from './Pages/Products';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import './App.css'
import Footer from './Components/Footer';
import Update from './Components/Update';
import Details from './Pages/Details';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/details/:id" component={<Details />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
