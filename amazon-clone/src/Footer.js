import React from "react";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };

  return (
    <div>
      <div className="ToTop">
        <button onClick={scrollToTop}>Back to top</button>
      </div>

      <div className="TopFooter_bg">
        <footer className="footer">
          <div className="footer-cols">
            <ul>
              <li>
                <h3>Get to Know Us</h3>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press Releases</a>
              </li>
              <li>
                <a href="#">Amazon Cares</a>
              </li>
              <li>
                <a href="#">Gift a Smile</a>
              </li>
              <li>
                <a href="#">Amazon Science</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Connect with Us</h3>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Make Money with Us</h3>
              </li>
              <li>
                <a href="#">Sell on Amazon</a>
              </li>
              <li>
                <a href="#">Sell under Amazon Accelerator</a>
              </li>
              <li>
                <a href="#">Amazon Global Selling</a>
              </li>
              <li>
                <a href="#">Become an Afflitate</a>
              </li>
              <li>
                <a href="#">Fulfilment by Amazon</a>
              </li>
              <li>
                <a href="#">Advertise Your Products</a>
              </li>
              <li>
                <a href="#">Amazon Pay on Merchants</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Let Us Help You</h3>
              </li>
              <li>
                <a href="#">COVID-19 and Amazon</a>
              </li>
              <li>
                <a href="#">Your Account</a>
              </li>
              <li>
                <a href="#">Returms Centre</a>
              </li>
              <li>
                <a href="#">100% Purchase Protection</a>
              </li>
              <li>
                <a href="#">Amazon App Download</a>
              </li>
              <li>
                <a href="#">Amazon Assistant Download</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
