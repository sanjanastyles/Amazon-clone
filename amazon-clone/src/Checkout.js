import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/Jun/Apay-scroll-1400x282.jpg"
          alt="ad"
        />
        <div>
          <h2 className="checkout_heading">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}
