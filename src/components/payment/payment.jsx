import React from "react";

import "./payment.scss";

import { VscCreditCard } from "react-icons/vsc";
import { RiPaypalLine } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";

const Payment = () => (
  <div>
    <h2>Payment</h2>
    <p>3 payment method available</p>
    <hr />
    <div className="payment-body">
      <h3>Payment Method</h3>
      <div className="methods">
        <div className="method active">
          <VscCreditCard />
          <span>Credit Card</span>
        </div>
        <div className="method">
          <RiPaypalLine />
          <span>Paypal</span>
        </div>
        <div className="method">
          <GiWallet />
          <span>Cash</span>
        </div>
      </div>
      <form>
        <div className="full-name">
          <label>Cardholder Name</label>
          <input
            type="text"
            onChange={(e) => e.target.value}
            placeholder="Your answer"
          />
        </div>
        <div className="card-number">
          <label>Card Number</label>
          <input
            type="text"
            onChange={(e) => e.target.value}
            placeholder="Your answer"
          />
        </div>
        <div className="card-data">
          <div className="exp-date">
            <label>Expiration Date</label>
            <input
              type="text"
              onChange={(e) => e.target.value}
              placeholder="Your answer"
            />
          </div>
          <div className="card-password">
            <label>CVV</label>
            <input
              type="text"
              onChange={(e) => e.target.value}
              placeholder="Your answer"
            />
          </div>
        </div>
        <hr />
        <div className="order-detail">
          <div className="order-type">
            <label>Order Type</label>
            <input
              type="text"
              onChange={(e) => e.target.value}
              placeholder="Your answer"
            />
          </div>
          <div className="card-password">
            <label>Table no.</label>
            <input
              type="text"
              onChange={(e) => e.target.value}
              placeholder="Your answer"
            />
          </div>
        </div>
        <div className="submit-btns">
          <button>Cancel</button>
          <button type="submit">Confirm Payment</button>
        </div>
      </form>
    </div>
  </div>
);

export default Payment;
