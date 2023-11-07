import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex fixed top-0 w-full h-24 bg-black bg-opacity-30 justify-between items-center z-50">
      <div className="text-white ml-3 text-2xl font-semibold">LOGO</div>
      <ul className="flex text-white font-normal text-xl">
        <li className="mr-3">
          <Link to="/">Ana Sayfa</Link>
        </li>
        <li className="mr-3">
          <Link to="/about">Hakkında</Link>
        </li>
        <li className="mr-3">
          <Link to="/products">Ürünler</Link>
        </li>
      </ul>
      <div className="flex items-center">
        <Link to="/cart" className="mr-3 text-white text-3xl">
          <FaShoppingCart />
        </Link>
        <Link
          className="mr-3 text-white w-24 bg-green-500 p-2 text-center rounded-lg"
          to="/admin"
        >
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
