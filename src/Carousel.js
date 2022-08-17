import React from "react";
import ImageSlider from "./ImageSlider";
import "./Home.css";

export default function Carousel() {
  const slides = [
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/TVs/Philips/Compressed/V116207186_HETV-Philips-Ambilight_Philips_1500x300_01.jpg",
      title: "",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Varun/Ref/Ref_1500x400_PC_store_header.gif",
      title: "",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/2022/OHL/July/Hnk/PD22/Householdessentialstore/Ingress/PD_1500x300.gif",
      title: "",
    },
    {
      url: "https://technosports.co.in/wp-content/uploads/2021/10/amazon.gif",
      title: "",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/sshabari/Kotrastore/New_Arrival_1500x300_header.gif",
      title: "",
    },
  ];

  return (
    <div className="home">
      <div className="home_container">
        <div className="home_carousal">
          <ImageSlider slides={slides} />
        </div>
      </div>
    </div>
  );
}
