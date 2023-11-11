import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { paymentConfirm } from "../Redux/CartSlice";

const Payment = () => {
  const cartItemCount = useSelector((state) => state.cart.itemCount);
  const cartItemPrice = useSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePaymentConfirm = () => {
    toast.success("🛒 Payment Successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch(paymentConfirm())
    navigate("/");
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h3 className="mb-10 text-4xl font-medium text-green-500">Payment</h3>
      <form
        onSubmit={() => handlePaymentConfirm()}
        className="flex w-full mb-10 justify-around flex-wrap"
      >
        <div className="flex w-full mb-10 justify-around flex-wrap">
          <div className="flex flex-col items-center w-[70%] p-2 bg-gray-100 rounded-xl sm:mb-0 mb-5">
            <div className="flex flex-wrap w-[80%]">
              <div className="w-[70%] mb-5">
                <label className="text-green-500 font-medium text-xl">
                  Name On The Card
                </label>{" "}
                <br />
                <input
                  className="w-[90%] h-10 border p-1"
                  type="text"
                  placeholder="John Doe"
                  required
                />{" "}
                <br />
              </div>
              <div className="w-[30%] mb-5">
                <label className="text-green-500 font-medium text-xl">
                  CVV
                </label>{" "}
                <br />
                <input
                  className="w-[100%] h-10 border p-1"
                  type="password"
                  maxlength="3"
                  placeholder="xxx"
                  required
                />
              </div>
            </div>
            <div className="w-[80%] mb-5">
              <label className="text-green-500 font-medium text-xl">
                Card Number
              </label>{" "}
              <br />
              <input
                className="w-[100%] h-10 border p-1"
                id="ccn"
                type="tel"
                inputmode="numeric"
                pattern="[0-9\s]{13,19}"
                autocomplete="cc-number"
                maxlength="19"
                placeholder="xxxx xxxx xxxx xxxx"
                required
              />
            </div>
            <div className="w-[80%] mb-5">
              <label className="text-green-500 font-medium text-xl">
              Expiration date{" "}
              </label>{" "}
              <br />
              <select className="w-[20%] h-10 mr-2 border" name="Months" id="Months" required>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select className="w-[20%] h-10 border" name="Years" id="Years" required>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
              </select>
            </div>
          </div>
          <div className="w-[300px] h-[300px] bg-gray-100 flex flex-col items-center rounded-xl relative">
            <h3 className="text-2xl mb-3 mt-1">Sipariş Özeti</h3>
            <p className="text-2xl mb-3">
              <span className="font-medium text-green-500">Total Items:</span>{" "}
              {cartItemCount}
            </p>
            <p className="text-xl mb-3">
              <span className="font-medium text-green-500">Total Amount:</span>{" "}
              {cartItemPrice}$
            </p>
            <button className="w-[90%] bg-green-500 text-white text-xl text-center absolute bottom-4 rounded-xl p-1">
            Pay Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
