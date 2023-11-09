import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.data.find((book) => book.id === parseInt(id))
  );

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="mt-28 w-full">
         <Link className="absolute left-10 top-28 text-center text-white font-medium text-2xl bg-green-500 w-24 p-1 rounded-md" to='/products' >Back</Link>
      <h2 className="text-center mb-10 text-4xl font-bold text-green-500">{book.kitapAdi}</h2>
      <div className="flex justify-center mb-10">
        <div>
          <img className="w-[400px] rounded-2xl" src={book.kitapResim} alt={book.kitapAdi} />
        </div>
        <div className="w-[500px]">
          <p className="ml-3 mb-3 text-xl font-medium text-gray-800 border-b pb-1"> <span className=" text-green-500">Kitap Adı:</span> {book.kitapAdi} </p>
          <p className="ml-3 mb-3 text-xl font-medium text-gray-800 border-b pb-1"><span className=" text-green-500">Kitap Kategorisi:</span> {book.kitapKategori}</p>
          <p className="ml-3 mb-3 text-xl font-medium text-gray-800 border-b pb-1"><span className=" text-green-500">Kitap Yazarı:</span> {book.kitapYazari}</p>
          <p className="ml-3 mb-3 text-xl font-medium text-gray-800 border-b pb-1"><span className=" text-green-500">Kitap Açıklaması:</span> {book.kitapAciklama.substring(0, 700) + "..."}{" "}</p>
          <button className=" w-[230px] mt-10 ml-3 bg-green-500 text-white rounded ">
                Add To Cart
              </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
