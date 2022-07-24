import React from "react";
import { Link } from "react-router-dom";
import "./Product.css"

export default function Categories_Catalogue({
  title,
  image1,
  image2,
  image3,
  image4,
}) {
  return (
    <div className="product">
      <div className="product_info">
        <h3 className="catalogue_title">{title}</h3>
      </div>
      <div className="categories">
        <Link to="/">
          <img src={image1} alt="" />
        </Link>
        <Link to="/">
          <img src={image2} alt="" />
        </Link>
      </div>
      <div className="categories">
        <Link to="/">
          <img src={image3} alt="" />
        </Link>
        <Link to="/">
          <img src={image4} alt="" />
        </Link>
      </div>
    </div>
  );
}
