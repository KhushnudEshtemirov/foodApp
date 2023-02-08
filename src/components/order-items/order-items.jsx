import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../cart-item/cart-item";

const OrderItems = () => {
  const { foodItems } = useSelector((state) => state.food);

  return (
    <div>
      {!foodItems.length ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
        </div>
      ) : (
        foodItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      )}
    </div>
  );
};

export default OrderItems;
