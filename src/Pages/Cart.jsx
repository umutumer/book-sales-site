import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from 'react-icons/bs'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = useSelector((state) => state.cart.itemCount);

  return (
    <div className="w-full flex flex-col min-h-screen items-center justify-center">
      <h2 className="text-center text-4xl mt-28 text-green-500">Shopping Cart</h2>
      <div className="w-full mt-24 flex justify-around relative">
        <div className="w-full flex flex-col items-center">
          {cartItems.map((item, index) => (
            <div
              className="flex items-center bg-gray-100 rounded-xl mb-10 w-[70%] relative"
              key={index}
            >
              <div className="m-5">
                <img className="w-28" src={item.kitapResim} alt="" />
              </div>
              <div className="p-5">
                <p className="mr-2"><span className="font-medium text-green-500">Kitap Adı:</span> {item.kitapAdi}</p>
                <p className="mr-2"><span className="font-medium text-green-500">Kitap Kategori:</span> {item.kitapKategori}</p>
                <p className="mr-2"><span className="font-medium text-green-500">Kitap Yazarı:</span> {item.kitapYazari}</p>
              </div>
              <div>
              <button className="absolute right-0 top-0 text-2xl text-center text-white bg-green-500 w-[50px] rounded-se-xl p-[10px]"><BsFillTrashFill /></button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[300px] h-[300px] bg-gray-100 mr-20 flex flex-col items-center rounded-xl relative">
          <h3 className="text-2xl mb-3">Sipariş Özeti</h3>
          <p className="text-2xl mb-3"><span className="font-medium text-green-500">Total Items:</span> {cartItemCount}</p>
          <p className="text-xl mb-3"><span className="font-medium text-green-500">Toplam Tutar:</span> Ayarlanacak</p>
          <Link className="w-[90%] bg-green-500 text-white text-xl text-center absolute bottom-4 rounded-xl p-1"> Sepeti Onayla</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
