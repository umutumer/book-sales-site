import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from 'react-icons/bs'
import { removeFromCart } from "../Redux/CartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = useSelector((state) => state.cart.itemCount);
  const cartItemPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
    toast.success('🛒 Deleted from Cart!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  return (
    <div className="w-full flex flex-col min-h-screen items-center justify-center">
      <h2 className="text-center text-4xl mt-28 text-green-500">Shopping Cart</h2>
      <div className="w-full mt-24 flex flex-wrap items-center sm:justify-around justify-center relative">
        <div className="w-full flex flex-wrap items-center justify-center">
          {cartItems.map((item, index) => (
            <div
              className="flex flex-wrap items-center bg-gray-100 rounded-xl mb-10 sm:w-[70%] w-[400px] relative"
              key={index}
            >
              <div className="m-5">
                <img className="w-28" src={item.kitapResim} alt="" />
              </div>
              <div className="p-5">
                <p className="mr-2"><span className="font-medium text-green-500">Book Name:</span> {item.kitapAdi}</p>
                <p className="mr-2"><span className="font-medium text-green-500">Book Category:</span> {item.kitapKategori}</p>
                <p className="mr-2"><span className="font-medium text-green-500">Book Author:</span> {item.kitapYazari}</p>
                <p className="mr-2"><span className="font-medium text-green-500">Price:</span> {item.kitapFiyat}₺</p>
              </div>
              <div>
              <button   onClick={() => handleRemoveFromCart(index)}  className="absolute right-0 top-0 text-2xl text-center text-white bg-green-500 w-[50px] rounded-se-xl p-[10px]"><BsFillTrashFill /></button>
              </div>
            </div>
          ))}
        </div>
        <div className="min-w-[300px] h-[300px] bg-gray-100 sm:mr-20 mr-0 sm:mb-0 mb-5 flex flex-col items-center text-center rounded-xl relative">
          <h3 className="text-2xl mb-3 mt-1">Order Summary</h3>
          <p className="text-2xl mb-3"><span className="font-medium text-green-500">Total Items:</span> {cartItemCount}</p>
          <p className="text-xl mb-3"><span className="font-medium text-green-500">Total Amount:</span> {cartItemPrice}$</p>
          <Link to='payment' className="w-[90%] bg-green-500 text-white text-xl text-center absolute bottom-4 rounded-xl p-1">Confirm Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
