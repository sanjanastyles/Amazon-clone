//rfc and enter
import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import "./Header.css";

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <FaSearch className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header_item">
            <span className="header_item1">
              Hello {!user ? "Guest" : user.email},{" "}
              {user ? "Sign Out" : "Sign In"}
            </span>
            <span className="header_item2">Account & List</span>
          </div>
        </Link>
        <div className="header_item">
          <span className="header_item1">Returns</span>
          <span className="header_item2">& Orders</span>
        </div>
        <Link to="/checkout">
          <div className="header_basket">
            <FaShoppingCart />
            <span className="header_item2 header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
