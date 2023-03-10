import React, { useState } from "react";
import { useSelector } from "react-redux";

import OrderItems from "../order-items/order-items";
import Payment from "../payment/payment";

import "./home-right.scss";

const HomeRight = () => {
  const { foodItems } = useSelector((state) => state.food);
  let [showPayment, setPayment] = useState(false);

  const showPaymentFunc = () => {
    setPayment(!showPayment);
  };

  const totalPrice = foodItems.reduce(
    (totalSum, current) => totalSum + current.quantity * current.cost,
    0
  );

  return (
    <div className="home-right-body">
      <div
        className={`black-window ${showPayment ? "show-modal" : ""}`}
        onClick={() => setPayment(false)}
      ></div>
      <div className="right-top">
        <h4>Orders #34562</h4>
        <div className="order-btn">
          <button className="active">Dine In</button>
          <button>To Go</button>
          <button>Delivery</button>
        </div>
        <div className="right-header">
          <span>Item</span>
          <span>Qty</span>
          <span>Price</span>
        </div>
        <hr />
      </div>
      <div className="right-body">
        <OrderItems />
      </div>
      <div className="right-bottom">
        <div>
          <p>Discount</p>
          <h5>$ 0</h5>
        </div>
        <div>
          <p>Sub total</p>
          <h5>$ {totalPrice}</h5>
        </div>
        <div>
          <button onClick={showPaymentFunc}>Continue to Payment</button>
        </div>
      </div>
      <div className={`payment ${showPayment ? "show" : ""}`}>
        <Payment showPaymentFunc={showPaymentFunc} />
      </div>
    </div>
  );
};

export default HomeRight;
