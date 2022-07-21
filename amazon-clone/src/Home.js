import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_carousal"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/GW/ACQ/PC_Hero_3000x1200_ho._CB631612836_.jpg"
          alt="Banner"
        ></img>
        <div className="home_row">
          <Product
            title="The invisible man"
            price={9.99}
            image="https://m.media-amazon.com/images/I/81jqSJWBLpL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            title="Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue)"
            price={52.99}
            image="https://m.media-amazon.com/images/I/61WoH34ASxL._AC_UF226,226_FMjpg_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="JBL Flip 4, Wireless Portable Bluetooth Speaker with Mic, JBL Signature Sound with Bass Radiator, Vibrant Colors with Rugged Fabric Design, JBL Connect+, IPX7 Waterproof & AUX (Black)"
            price={32.99}
            image="https://m.media-amazon.com/images/I/41QBOYqSZsL._AC_UF226,226_FMjpg_.jpg"
            rating={5}
          />
          <Product
            title="Apple iPhone 13 (128GB) - Starlight"
            price={833.27}
            image="https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            title="Apple Watch SE (GPS, 40mm) - Space Grey Aluminium Case with Midnight Sport Band - Regular"
            price={375.91}
            image="https://images-na.ssl-images-amazon.com/images/I/71gsjKxyfjL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="LG 164 cm (65 inches) 4K Ultra HD Smart NanoCell TV 65NANO91TNA (Dark Steel Silver)"
            price={2719.08}
            image="https://m.media-amazon.com/images/I/81inMIbTO9L._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
