import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const book = useSelector((state) => state.data.find((book) => book.id == parseInt(id)));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h2>{book.kitapAdi} Details</h2>
      <img src={book.kitapResim} alt={book.kitapAdi} />
      <p>Kitap Adı: {book.kitapAdi}</p>
      <p>Kitap Kategorisi: {book.kitapKategori}</p>
      <p>Kitap Yazarı: {book.kitapYazari}</p>
    </div>
  );
};

export default Details;
