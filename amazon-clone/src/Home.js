import React from "react";
import "./Home.css";
import Product from "./Product";
import Catalogue from "./Catalogue";
import Categories_Catalogue from "./Categories_Catalogue";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <Carousel />
        <div className="home_row">
          <Catalogue
            title="Up to 75% off | Laptops, headphones & more"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Primeday/GW/PC_CategoryCard_758X608_1x._SY304_CB631631815_.jpg"
          />
          <Categories_Catalogue
            title="Up to 80% off | Deals on men's fashion"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/PD22/QC/PC-MF/clothins-186-116._SY116_CB633120326_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/PD22/QC/PC-MF/footwear-186-116._SY116_CB633120326_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/PD22/QC/PC-MF/watches-186-116._SY116_CB633120326_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/PD22/QC/PC-MF/bags-186-116._SY116_CB633120326_.jpg"
          />
          <Catalogue
            title="Join Prime & access live deals"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/PD22/GW/IN-PD-22-teaser-GW_379x304_eng._SY304_CB631802614_.jpg"
          />
          <Categories_Catalogue
            title="Up to 60% off | Daily essentials"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/Cons2022-Vernac/PD2022/PC_QuadCard_1_1X._SY116_CB632760922_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/Cons2022-Vernac/PD2022/PC_QuadCard_2_1X._SY116_CB632760922_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/Cons2022-Vernac/PD2022/PC_QuadCard_4_1X._SY116_CB632760922_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/Cons2022-Vernac/PD2022/PC_QuadCard_3_1X._SY116_CB632760922_.jpg"
          />
        </div>
        <div className="home_row">
          <Catalogue image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Varun/Ref/Coupon_offer_1500x300.gif" />
        </div>
        <div className="home_row">
          <Catalogue
            title="Up to 60% off | TVs & appliances"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Sabeer/Prime_DAY_JULY/Hisense_PD/HISENSE_PC_CategoryCard_379X304._SY304_CB631459543_.jpg"
          />
          <Categories_Catalogue
            title="Starting ₹79 | Home, kitchen & more"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/SmallAppliances-22/PD-22-SA/pd22-OHL_GW/PC-QC_186x116-2._SY116_CB632410968_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/PD/OHLGW/186x116_2._SY116_CB633380966_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/PD22/GWCentral/PC_QuadCard_186X116_2._SY116_CB633753273_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/July/PD/GW/Central/Unrec/PC_QuadCard_186x116._SY116_CB634124209_.jpg"
          />
          <Catalogue
            title="Get the best offers on mobiles and accessories"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/lshruthi/Event/PD_2022/MSO/D51029920_WL_PD_2022_MSO_CCPC_CategoryCard_379X304._SY304_CB631806232_.jpg"
          />
          <Categories_Catalogue
            title="Up to 70% off | Amazon Brands & more"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_gw/xcm_banners_latv_372x232_in-en._SY116_CB633094053_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_gw/xcm_banners_home-kitchen_372x232_in-en._SY116_CB633093740_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/khabasha/desktop_gw/xcm_banners_daily-essentials_372x232_in-en._SY116_CB633093741_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/private_label_fashion/hariprkl/new_pd22/xcm_banners_2022_primeday_qc-372x23_desktop_186x116_in-en._SY116_CB633277485_.jpg"
          />
        </div>
        <div className="home_row">
          <Catalogue image="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/PD22/joing_prime_1500x230_ho.jpg" />
        </div>
        <div className="home_row">
          <Product
            title="Fire TV Cube | Hands-free streaming device with Alexa | 4K Ultra HD | 2021 release"
            price={87.67}
            image="https://m.media-amazon.com/images/I/41pVEYdazBL.jpg"
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
          <Catalogue image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Varun/Ref/Get_Extra_1500x300.gif" />
        </div>
        <div className="home_row">
          <Product
            title="LG 164 cm (65 inches) 4K Ultra HD Smart NanoCell TV 65NANO91TNA (Dark Steel Silver)"
            price={2719.08}
            image="https://m.media-amazon.com/images/I/81inMIbTO9L._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            title="AmazonBasics 564 L Side-by-Side Door Refrigerator (Black Glass Door)"
            price={607.41}
            image="https://m.media-amazon.com/images/I/31GpOhK+0CL._SX342_SY445_.jpg"
            rating={5}
          />
          <Product
            title="Nintendo Switch OLED model With Neon Red & Neon Blue Joy-Con"
            price={415.8}
            image="https://cdn-japantimes.com/wp-content/uploads/2021/08/np_file_103789.jpeg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
