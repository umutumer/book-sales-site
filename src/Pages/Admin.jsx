import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/action";
import { Link } from "react-router-dom";

const Admin = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="w-full">
      <div>
        <table className="mt-24 w-full">
          <thead>
            <tr className=" border-b text-left">
              <th>Kitap Adı</th>
              <th>Kitap Kategori</th>
              <th>Kitap Yazarı</th>
              <th>Sayfa Sayısı</th>
              <th>Kitap Resim Url</th>
              <th>Kitap Açıklama</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((book, index) => (
              <tr className="border-2 h-20 overflow-y-scroll w-full" key={index}>
                <td className="w-[100px] p-1">{book.kitapAdi}</td>
                <td className="w-[100px] p-1">{book.kitapKategori}</td>
                <td className="w-[100px] p-1">{book.kitapYazari}</td>
                <td className="w-[100px] p-1">{book.sayfaSayisi}</td>
                <td className="w-[200px] p-1">{book.kitapResim}</td>
                <td>{book.kitapAciklama.substring(0, 100) + "..."}{" "}</td>
                <td className="w-[200px] p-1 relative">
                  <Link className="absolute top-5 left-2 bg-green-500 w-20 p-1 rounded text-center text-white" to={`/update/${book.id}`}>Edit</Link>
                  <button className="absolute top-5 right-2 bg-red-500 w-20 p-1 rounded text-white">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
