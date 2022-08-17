import React from "react";
import "./Empty_cart.css";

export default function Empty_cart() {
  return (
    <div className="body">
      <div class="post-container">
        <div class="post-thumb">
          <img
            src="https://cdn.discordapp.com/attachments/820201141131935765/1001122168685482036/unknown.png"
            alt=""
          />
        </div>
        <div class="post-content">
          <h1 class="post-title">Your Amazon Cart is empty</h1>
          <a href="/">Shop today’s deals</a>
        </div>
      </div>
      <div class="post-container"></div>
      <div className="empty_cart">
        <p>
          The price and availability of items at Amazon.in are subject to
          change. The shopping cart is a temporary place to store a list of your
          items and reflects each item's most recent price. <br />
          Do you have a promotional code? We'll ask you to enter your claim code
          when it's time to pay.
        </p>
      </div>
    </div>
  );
}
