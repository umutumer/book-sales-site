import React, { useState } from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const data = useSelector((state) => state.data);
  const [selectedCategory, setSelectedCategory] = useState("Tüm Kitaplar");
  const uniqueCategories = [...new Set(data.map((book) => book.kitapKategori))];

  const filteredData = data.filter((book) => {
    if (selectedCategory === "Tüm Kitaplar") {
      return true;
    } else {
      return book.kitapKategori === selectedCategory;
    }
  });

  return (
    <div className="flex">
      <div className="w-1/4 p-4 mt-24 relative">
     <div className="fixed top-24 p-4">
     <h2 className="text-3xl mb-4">Kategoriler</h2>
      <ul>
        <li className="text-xl cursor-pointer border-b" onClick={() => setSelectedCategory("Tüm Kitaplar")}>Tüm Kitaplar</li>
        {uniqueCategories.map((category, index) => (
          <li className="text-xl cursor-pointer border-b" key={index} onClick={() => setSelectedCategory(category)}>{category}</li>
        ))}
      </ul>
     </div>
    </div>
      <div className="w-3/4 p-4 mt-24">
        <div className="flex flex-wrap justify-center">
          {filteredData.map((book, index) => (
            <div
              key={index}
              className="m-4 border border-gray-400 w-[250px] h-[550px] relative"
            >
              <img className="w-full h-[350px]" src={book.kitapResim} alt="" />
              <p className="p-1">Kitap Adı: {book.kitapAdi}</p>
              <p className="p-1">Kitap Kategorisi: {book.kitapKategori}</p>
              <p className="p-1">Kitap Yazarı: {book.kitapYazari}</p>
              <button className="absolute bottom-3 w-[230px] left-[10px] bg-green-500 text-white rounded ">
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
