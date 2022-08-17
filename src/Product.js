import React from "react";
import { FaStar } from "react-icons/fa";
import "./Product.css";
import { useStateValue } from "./StateProvider";

export default function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
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
      <button onClick={addToBasket}>Add to basket </button>
    </div>
  );
}
