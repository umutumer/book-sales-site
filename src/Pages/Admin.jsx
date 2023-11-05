import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/action';

const Admin = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <table>
                <thead>
                    <tr className=' border-b text-left'>
                        <th>Kitap Adı</th>
                        <th>Kitap Kategori</th>
                        <th>Kitap Yazarı</th>
                        <th>Sayfa Sayısı</th>
                        <th>Kitap Resim Url</th>
                        <th>Kitap Açıklama</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((book, index) => (
                        <tr className=' border-b' key={index}>
                            <td>{book.kitapAdi}</td>
                            <td>{book.kitapKategori}</td>
                            <td>{book.kitapYazari}</td>
                            <td>{book.sayfaSayisi}</td>
                            <td>{book.kitapResim}</td>
                            <td>{book.kitapAciklama}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  );
};

export default Admin;