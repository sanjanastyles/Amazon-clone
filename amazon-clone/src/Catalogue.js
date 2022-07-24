import React from "react";
import "./Product.css";

export default function catalogue({ title, image }) {
  return (
    <div className="product">
      <div className="product_info">
        <h3 className="catalogue_title">{title}</h3>
      </div>
      <img className="catalogue_img" src={image} alt=""></img>
    </div>
  );
}
