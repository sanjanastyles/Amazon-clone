//rfc and enter
import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon_logo"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <FaSearch className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_item">
          <span className="header_item1">Hello, Sign in</span>
          <span className="header_item2">Account & List</span>
        </div>
        <div className="header_item">
          <span className="header_item1">Returns</span>
          <span className="header_item2">& Orders</span>
        </div>
        <div className="header_basket">
          <FaShoppingCart />
          <span className="header_item2 header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
