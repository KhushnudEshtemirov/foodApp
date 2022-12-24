import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const OrderItems = ({ cartItems }) => (
  <div>
    {!cartItems.length ? (
      <div className="empty-cart">
        <h2>Your cart is empty!</h2>
      </div>
    ) : (
      cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
    )}
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(OrderItems);
