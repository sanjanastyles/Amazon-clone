import React from "react";
import "./Empty_cart.css";

export default function Empty_cart() {
  return (
    <div className="empty_cart">
      <img
        className="empty_image"
        src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
        alt=""
      />
      <h2>Your Amazon Cart is empty</h2>
      <a href="/">Shop today's deals</a>
      <div className="Empty_cart_text">
        <p>
          The price and availability of items at Amazon.com are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. Shopping CartLearn more Do
          you have a gift card or promotional code? We'll ask you to enter your
          claim code when it's time to pay.
        </p>
      </div>
    </div>
  );
}
