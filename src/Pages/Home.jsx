import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/action";
import HomeImg from "../assets/home-img.png";
import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiHappy } from "react-icons/bi";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomerImg1 from "../assets/customer-1.png";
import CustomerImg2 from "../assets/customer-2.png";
import CustomerImg3 from "../assets/customer-3.png";
import { FaComments } from "react-icons/fa";
import { BsStarFill , BsStar , BsStarHalf  } from "react-icons/bs";

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
        className="flex items-center justify-center w-full h-[500px] bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-fixed "
      >
        <h3 className="w-full text-white text-center text-4xl font-bold">WELCOME BOOK LOVER❤️</h3>
      </div>
      <div className="w-full flex flex-wrap justify-around bg-gray-100">
        <div className="w-200 p-10 flex flex-col items-center">
          <FaTruckFast className="text-4xl text-green-500" />
          <h3 className="text-xl font-medium text-green-500">Fast Delivery</h3>
        </div>
        <div className="p-10 flex flex-col items-center">
          <RiSecurePaymentFill className="text-4xl text-green-500" />
          <h3 className="text-xl font-medium text-green-500">
            Securty Payment
          </h3>
        </div>
        <div className="p-10 flex flex-col items-center">
          <BiHappy className="text-4xl text-green-500" />
          <h3 className="text-xl font-medium text-green-500">Happy Costumer</h3>
        </div>
      </div>
      <div className="w-full relative">
        <h3 className="text-center font-medium text-5xl mt-10">Best Sellers</h3>
        <Link
          to="/products"
          className="absolute right-24 top-20 text-blue-500 border-b border-blue-500 font-medium"
        >
          View All
        </Link>
        <div className="flex flex-wrap justify-center mt-10 mb-10">
          {bestsellers.map((book, index) => (
            <div
              key={index}
              className="m-4 border border-gray-400 w-[250px] h-[600px] relative"
            >
              <img className="w-full" src={book.kitapResim} alt="" />
              <p className="p-1">Kitap Adi: {book.kitapAdi}</p>
              <p className="p-1">Kitap Kategori: {book.kitapKategori}</p>
              <p className="p-1">Kitap Yazari: {book.kitapYazari}</p>
              <p className="p-1">Fiyat: {book.kitapFiyat}₺</p>
              <AiTwotoneStar className="absolute top-[-20px] left-[-20px] text-[50px] text-yellow-300 z-10" />
              <button className="absolute bottom-3 w-[230px] left-[10px] bg-green-500 text-white rounded ">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col bg-gray-100">
        <h3 className="text-4xl text-center m-5 text-green-500">
          Customer Comments
        </h3>
        <div className="flex flex-wrap w-full justify-evenly items-center">
          <div className="w-[300px] h-[300px] p-2 mb-5 bg-white relative rounded-2xl">
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              beatae ex sapiente ipsa laudantium quam molestias distinctio iure
              doloribus modi numquam, vero eaque sequi earum odit? Voluptatibus
              aut fugit dolor?
            </p>
            <div className="absolute flex items-center bottom-5">
              <img className="w-20 rounded-[50%]" src={CustomerImg1} alt="" />
              <div className="ml-2">
                <h3>Lorem, ipsum.</h3>
                <div className="flex">
                  <BsStarFill className=" text-yellow-400" />
                  <BsStarFill className=" text-yellow-400" />
                  <BsStarFill className=" text-yellow-400" />
                  <BsStarFill className=" text-yellow-400" />
                  <BsStarFill className=" text-yellow-400" />
                </div>
              </div>
            </div>
            <FaComments className="absolute text-green-500 text-4xl -top-4 left-0" />
          </div>
          <div className="w-[300px] h-[300px] p-2 mb-5 bg-white relative rounded-2xl">
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              beatae ex sapiente ipsa laudantium quam molestias distinctio iure
              doloribus modi numquam, vero eaque sequi earum odit? Voluptatibus
              aut fugit dolor?
            </p>
            <div className="absolute flex items-center bottom-5">
              <img className="w-20 rounded-[50%]" src={CustomerImg2} alt="" />
              <div className="ml-2">
                <h3>Lorem, ipsum.</h3>
                <div className="flex">
                  <BsStarFill className=" text-yellow-400" />
                  <BsStarFill className=" text-yellow-400" />
                  <BsStarFill className=" text-yellow-400" />
                  <BsStarFill className=" text-yellow-400" />
                  <BsStar className=" text-yellow-400" />
                </div>
              </div>
            </div>
            <FaComments className="absolute text-green-500 text-4xl -top-4 left-0" />
          </div>
          <div className="w-[300px] h-[300px] p-2 mb-5 bg-white relative rounded-2xl">
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              beatae ex sapiente ipsa laudantium quam molestias distinctio iure
              doloribus modi numquam, vero eaque sequi earum odit? Voluptatibus
              aut fugit dolor?
            </p>
            <div className="absolute flex items-center bottom-5">
              <img className="w-20 rounded-[50%]" src={CustomerImg3} alt="" />
              <div className="ml-2">
                <h3>Lorem, ipsum.</h3>
                <div className="flex">
                  <BsStarFill className=" text-yellow-400" />
                  <BsStarFill className=" text-yellow-400" />
                  <BsStarFill className=" text-yellow-400" />
                  <BsStarFill className=" text-yellow-400" />
                  <BsStarHalf className=" text-yellow-400" />
                </div>
              </div>
            </div>
            <FaComments className="absolute text-green-500 text-4xl -top-4 left-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
