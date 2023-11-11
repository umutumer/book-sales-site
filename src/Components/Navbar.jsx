import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartItemCount = useSelector((state) => state.cart.itemCount);
  return (
    <nav className="flex fixed top-0 w-full h-24 bg-black bg-opacity-30 justify-between items-center z-50">
      <div className="text-white sm:ml-3 ml-1 sm:text-2xl text-xl font-semibold">LOGO</div>
      <ul className="flex text-white font-normal sm:text-xl text-lg">
        <li className="sm:mr-3 mr-1">
          <Link to="/">Ana Sayfa</Link>
        </li>
        <li className="sm:mr-3 mr-1">
          <Link to="/about">Hakkında</Link>
        </li>
        <li className="sm:mr-3 mr-1">
          <Link to="/products">Ürünler</Link>
        </li>
      </ul>
      <div className="flex items-center">
        <Link to="/cart" className="sm:mr-3 mr-1 relative text-white sm:text-3xl text-2xl">
          <FaShoppingCart />
          {cartItemCount > 0 && <span className="absolute -top-2 -right-1 sm:w-6 w-4 h-4 sm:h-6 sm:text-base  text-sm text-center bg-green-500 rounded-full">{cartItemCount}</span>}
        </Link>
        <Link
          className="sm:mr-3 mr-1 text-white sm:w-24 w-14 bg-green-500 sm:p-2 p-1 text-center rounded-lg text-base"
          to="/admin"
        >
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
