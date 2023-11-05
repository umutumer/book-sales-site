import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/action";
import HomeImg from "../assets/home-img.png";
import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiHappy } from "react-icons/bi";
import { AiTwotoneStar } from "react-icons/ai";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const bestsellers = data.filter((book) => book.bestseller);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="w-full">
      <div
        style={{ "--image-url": `url(${HomeImg})` }}
        className="flex items-center justify-center w-full h-[500px] bg-[image:var(--image-url)] bg-cover bg-no-repeat "
      >
        <h3 className="text-white text-4xl font-bold">WELCOME BOOK LOVER❤️</h3>
      </div>
      <div className="w-full flex justify-around bg-gray-100">
        <div className="p-10 flex flex-col items-center">
          <FaTruckFast className="text-4xl text-green-500" />
          <h3 className="text-xl font-medium text-green-500">Fast Delivery</h3>
        </div>
        <div  className="p-10 flex flex-col items-center"> 
          <RiSecurePaymentFill className="text-4xl text-green-500" />
          <h3 className="text-xl font-medium text-green-500">Securty Payment</h3>
        </div>
        <div  className="p-10 flex flex-col items-center">
          <BiHappy className="text-4xl text-green-500" />
          <h3 className="text-xl font-medium text-green-500">Happy Costumer</h3>
        </div>
      </div>
      <div className="w-full">
        <h3 className="text-center font-medium text-5xl mt-10">Best Sellers</h3>
        <div className="flex flex-wrap justify-center mt-10">
        {bestsellers.map((book, index) => (
          <div key={index} className="m-4 border border-gray-400 w-[250px] relative">
            <img className="w-full" src={book.kitapResim} alt="" />
            <p className="p-1">Kitap Adi: {book.kitapAdi}</p>
            <p className="p-1">Kitap Kategori: {book.kitapKategori}</p>
            <p className="p-1">Kitap Yazari: {book.kitapYazari}</p>
            <AiTwotoneStar className="absolute top-[-20px] left-[-20px] text-[50px] text-yellow-300 z-10" />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
