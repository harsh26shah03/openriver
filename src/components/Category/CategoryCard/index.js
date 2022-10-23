import "./style.css";
import React from "react";
import cat1 from "./cat1.jpg";
import cat2 from "./cat2.jpg";
import cat3 from "./cat3.jpg";
import cat4 from "./cat4.jpg";
import cat5 from "./cat5.jpg";
import cat6 from "./cat6.jpg";
import cat7 from "./cat7.jpg";
import cat8 from "./cat8.png";

const NFTs = {
  Art: cat1,
  Collectibles: cat2,
  "Domain Names": cat3,
  Music: cat4,
  Photography: cat5,
  "Trading Cards": cat6,
  Utility: cat7,
  "Virtual Worlds": cat8,
};

const CategoryCard = ({ name }) => {
  return (
    <div className="categorycardWrapper">
      <img src={NFTs[name]} className="categorybackground" />
      <div className="categorycontent">
        <div className="categoryname">{name}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
