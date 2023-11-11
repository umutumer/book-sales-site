import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Admin from "./Pages/Admin";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";
import Update from "./Components/Update";
import Details from "./Pages/Details";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
