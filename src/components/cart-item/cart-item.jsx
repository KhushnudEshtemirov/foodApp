import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const CartItem = ({ item: { imgUrl, cost, name, quantity } }) => (
  <div className="order-item">
    <div className="order-left">
      <div className="order-top">
        <div className="dish-image">
          <img src={imgUrl} alt="dish" />
        </div>
        <div>
          <p>{name}</p>
          <span>$ {cost}</span>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => e.target.value}
            value={quantity}
          />
        </div>
        <div>
          <p>$ {cost * quantity}</p>
        </div>
      </div>
    </div>
    <div className="order-bottom">
      <div className="order-node">
        <input type="text" placeholder="Order Note..." />
      </div>
      <div>
        <AiOutlineDelete />
      </div>
    </div>
  </div>
);

export default CartItem;
