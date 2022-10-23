import "./style.css";
import React from "react";
import nft1 from "./nft1.jpg";
import nft2 from "./nft2.jpg";
import nft3 from "./nft3.png";
import nft4 from "./nft4.jpeg";
import nft5 from "./nft5.jpg";
import nft6 from "./nft6.jpg";

const NFTs = {
  "What is NFT?": nft1,
  "How it works?": nft2,
  "How to buy it?": nft3,
  "What does it include?": nft4,
  "Are they worth buying?": nft5,
  "How to make money?": nft6,
};

const ServiceCard = ({ name }) => {
  return (
    <div className="postbodycardWrapper">
      <img src={NFTs[name]} className="postbodybackground" />
      <div className="postbodycontent">
        <div className="postbodyname">{name}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
