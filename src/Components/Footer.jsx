import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-[100px] flex justify-evenly items-center bg-green-500 text-white">
      <div className=" font-bold text-4xl ml-1">Logo</div>
      <div className="flex flex-col text-xl">
        <Link to="/">Anasayfa</Link>
        <Link to="/about">Hakkında</Link>
        <Link to="/products">Ürünler</Link>
      </div>
      <div className="text-xl mr-2 flex flex-col items-center">
        <h3 className="mb-2">Social Media</h3>
        <div className="flex">
          <Link className="mr-2">
            <BsInstagram />
          </Link>
          <Link>
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
