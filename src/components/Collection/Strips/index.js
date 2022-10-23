import React from "react";
import { MdVerified } from "react-icons/md";
import "./style.css";
import profile from "./profile.png";
import strip1 from "./strip1.gif";
import strip2 from "./strip2.gif";
import strip3 from "./strip3.gif";
import strip4 from "./strip4.gif";
import strip5 from "./strip5.gif";
import strip6 from "./strip6.gif";
import strip7 from "./strip7.gif";
import strip8 from "./strip8.gif";
import strip9 from "./strip9.gif";
import strip10 from "./strip10.gif";

const stripImages = [
  strip1,
  strip2,
  strip3,
  strip4,
  strip5,
  strip6,
  strip7,
  strip8,
  strip9,
  strip10,
];

const Strips = ({ name, price, isVerified, index, volume, change }) => {
  return (
    <div className="stripWrapper">
      <div className="stripIndex">{index}</div>
      <div className="stripImage">
        <img
          src={stripImages[Math.floor(Math.random() * 10)]}
          className="stripImageTag"
        />
      </div>
      <div className="stripContent">
        <div className="stripContentName">
          {name} {isVerified && <MdVerified />}
        </div>
        <div className="stripContentSmallPrice">Floor : {price} ETH</div>
      </div>
      <div className="stripContentPrice">{price} ETH</div>
      <div className="stripVolume">
        <div className="stripVolumeMain">{volume} ETH</div>
        {change && (
          <div
            className="stripVolumeChange"
            style={
              Number(change) < 0
                ? { color: "rgb(230, 41, 41)" }
                : { color: "rgb(52, 199, 123)" }
            }
          >
            {change}%
          </div>
        )}
      </div>
    </div>
  );
};

export default Strips;
