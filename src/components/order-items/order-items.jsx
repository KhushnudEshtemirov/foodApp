import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item";

import "./order-items.scss";

const OrderItems = ({ cartItems }) => (
  <div>
    {cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} item={cartItem} />
    ))}
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(OrderItems);
