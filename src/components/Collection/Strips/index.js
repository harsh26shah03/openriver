import React from "react";
import { MdVerified } from "react-icons/md";
import "./style.css";

const Strips = ({ name, image, price, isVerified, index, volume }) => {
  return (
    <div className="stripWrapper">
      <div className="stripIndex">{index}</div>
      <img src={image} className="stripImage" />
      <div className="stripContent">
        <div className="stripContentName">
          {name} {isVerified && <MdVerified />}
        </div>
        <div className="stripContentPrice">Floor : {price} ETH</div>
      </div>
      <div className="stripVolume">{volume} ETH</div>
    </div>
  );
};

export default Strips;
