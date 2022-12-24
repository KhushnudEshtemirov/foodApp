import React from "react";

import "./home-right.scss";

import { AiOutlineDelete } from "react-icons/ai";

import dishImage from "./dish.png";

const HomeRight = () => {
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
        <div className="order-item">
          <div className="order-left">
            <div className="order-top">
              <div className="dish-image">
                <img src={dishImage} alt="dish" />
              </div>
              <div>
                <p>Beef dumpling in hot and sour soup</p>
                <span>$ 2.29</span>
              </div>
              <div>
                <input type="text" onChange={(e) => e.target.value} />
              </div>
              <div>
                <p>$ 4,58</p>
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
        <div className="order-item">
          <div className="order-left">
            <div className="order-top">
              <div className="dish-image">
                <img src={dishImage} alt="dish" />
              </div>
              <div>
                <p>Beef dumpling in hot and sour soup</p>
                <span>$ 2.29</span>
              </div>
              <div>
                <input type="text" onChange={(e) => e.target.value} />
              </div>
              <div>
                <p>$ 4,58</p>
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
        <div className="order-item">
          <div className="order-left">
            <div className="order-top">
              <div className="dish-image">
                <img src={dishImage} alt="dish" />
              </div>
              <div>
                <p>Beef dumpling in hot and sour soup</p>
                <span>$ 2.29</span>
              </div>
              <div>
                <input type="text" onChange={(e) => e.target.value} />
              </div>
              <div>
                <p>$ 4,58</p>
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
        <div className="order-item">
          <div className="order-left">
            <div className="order-top">
              <div className="dish-image">
                <img src={dishImage} alt="dish" />
              </div>
              <div>
                <p>Beef dumpling in hot and sour soup</p>
                <span>$ 2.29</span>
              </div>
              <div>
                <input type="text" onChange={(e) => e.target.value} />
              </div>
              <div>
                <p>$ 4,58</p>
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
      </div>
      <div className="right-bottom">
        <div>
          <p>Discount</p>
          <h5>$0</h5>
        </div>
        <div>
          <p>Sub total</p>
          <h5>$ 21.03</h5>
        </div>
        <div>
          <button>Continue to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
