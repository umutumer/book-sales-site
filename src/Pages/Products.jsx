import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../Redux/CartSlice";
import { toast } from "react-toastify";

const Products = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All Books");
  const uniqueCategories = [...new Set(data.map((book) => book.kitapKategori))];

  const handleAddToCart = (productId) => {
    const product = data.find((item) => item.id === productId);
    if (product) {
      dispatch(addToCart(product));
      toast.success('🛒 Added to Cart!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  const filteredData = data.filter((book) => {
    if (selectedCategory === "All Books") {
      return true;
    } else {
      return book.kitapKategori === selectedCategory;
    }
  });

  return (
    <div className="flex w-full h-full">
      <div className="sm:w-1/4 w-none mt-24 relative ">
        <div className="fixed z-10 sm:block flex sm:w-1/4 w-full sm:h-full h-12  sm:bg-gray-100 sm:text-black text-white bg-black top-24 p-4">
          <h2 className="sm:block hidden sm:text-5xl text-xl sm:mb-6 mr-2 sm:items-start items-center">Categories</h2>
          <ul className="w-full sm:block flex sm:items-start items-center sm:justify-start justify-center">
            <li
              className="sm:text-3xl text-lg sm:w-full cursor-pointer sm:pb-1 sm:mb-5 mr-2"
              onClick={() => setSelectedCategory("All Books")}
            >
              All Books
            </li>
            {uniqueCategories.map((category, index) => (
              <li
                className="sm:text-3xl text-lg cursor-pointer sm:mb-5 mr-2"
                key={index}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sm:w-3/4 w-full p-4 sm:mt-24 mt-32">
        <div className="flex flex-wrap justify-center">
          {filteredData.map((book, index) => (
            <div
              key={index}
              className="m-4 border border-gray-400 w-[250px] h-[600px] relative"
            >
              <div>
                <Link to={`/details/${book.id}`}>
                  <img
                    className="w-full h-[350px]"
                    src={book.kitapResim}
                    alt=""
                  />
                  <p className="p-1">Book Name: {book.kitapAdi}</p>
                  <p className="p-1">Book Category: {book.kitapKategori}</p>
                  <p className="p-1">Book author: {book.kitapYazari}</p>
                  <p className="p-1">Price: {book.kitapFiyat}$</p>
                </Link>
              </div>
              <button
                onClick={() => handleAddToCart(book.id)}
                className="absolute bottom-3 w-[230px] left-[10px] bg-green-500 text-white rounded "
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
