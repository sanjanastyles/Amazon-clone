import React from "react";
import ImageSlider from "./ImageSlider";
import "./Home.css";

export default function Carousel() {
  const slides = [
    {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/042021/1500-X-350-Deals-Books-GIF-Banner-Revised.gif",
        title: "",
      },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Audio/NuRepublic/Days/Sale-Banner-1500-X-300.jpg",
      title: "",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/JanArt/Gateway/MainBanner_1500_300_1701.jpg",
      title: "",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img16/app/AppyHours/Page/Revised/1500x300_PC_banner.jpg",
      title: "",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/FEB_2020/SVD/STOREFRONT_BANNER/CORRECTED_MOV_FST/STOREFRONT_BANNER_1500X300._CB424201625_.jpg",
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
