import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import Empty_cart from "./Empty_cart";

export default function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://thumbs.gfycat.com/AcrobaticAnimatedAdmiralbutterfly-size_restricted.gif"
          alt="ad"
        />
        <div>
          <h1>Hello,{!user ? "Guest" : user.email}</h1>
          {basket.length === 0 ? (
            <Empty_cart />
          ) : (
            <h2 className="checkout_heading">Your shopping Basket</h2>
          )}

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}
