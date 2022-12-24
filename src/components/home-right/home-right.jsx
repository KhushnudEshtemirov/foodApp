import React from "react";
import { connect } from "react-redux";

import { selectCartTotalPrice } from "../../redux/cart/cart.selectors";
import OrderItems from "../order-items/order-items";

import "./home-right.scss";

const HomeRight = ({ totalPrice }) => {
  return (
    <div className="home-right-body">
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
          <h5>$0</h5>
        </div>
        <div>
          <p>Sub total</p>
          <h5>{totalPrice}</h5>
        </div>
        <div>
          <button>Continue to Payment</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  totalPrice: selectCartTotalPrice(state),
});

export default connect(mapStateToProps)(HomeRight);
