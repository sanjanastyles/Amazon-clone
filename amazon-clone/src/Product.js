import React from "react";
import { FaStar } from "react-icons/fa";
import "./Product.css";

export default function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <FaStar />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="the invisible man"></img>
      <button>Add to basket </button>
    </div>
  );
}
