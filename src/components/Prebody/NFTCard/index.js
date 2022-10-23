import "./style.css";
import React from "react";
import { MdVerified } from "react-icons/md";
import harsh from "./Diplo.avif";
import darknight from "./images.jpg";
import modi from "./BeardOfModi.avif";
import rammandir from "./rammandir.jpg";
import war from "./war.jpg";
import heaven from "./heaven.jpg";

const NFTs = {
  Harsh: harsh,
  "Dark night....": darknight,
  "Modi during Covid": modi,
  "Ram Mandir": rammandir,
  Battles: war,
  "Heaven in Siege": heaven,
};

const NFTCard = ({ name, isVerified, price }) => {
  return (
    <div className="cardWrapper">
      <img src={NFTs[name]} className="prebodyimage" />
      <div className="content">
        <div className="name">
          {name} {isVerified && <MdVerified />}
        </div>
        <div className="price">Floor : {price} ETH</div>
      </div>
    </div>
  );
};

export default NFTCard;
