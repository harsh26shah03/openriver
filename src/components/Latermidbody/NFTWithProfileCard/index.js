import "./style.css";
import React from "react";
import { MdVerified } from "react-icons/md";
import Bleik from "./Bleik.jpg";
import Odda from "./Odda.jpg";
import Reinebringen from "./Reinebringen.jpg";
import RorosStreet from "./RorosStreet.jpg";
import Svolvaer from "./Svolvaer.jpg";
import Trolltunga from "./Trolltunga.jpg";

import profile1 from "./profile1.gif";
import profile2 from "./profile2.gif";
import profile3 from "./profile3.gif";
import profile4 from "./profile4.gif";
import profile5 from "./profile5.gif";
import profile6 from "./profile6.gif";

const NFTs = {
  Bleik: Bleik,
  Odda: Odda,
  Reinebringen: Reinebringen,
  "Roros Street": RorosStreet,
  Svolvaer: Svolvaer,
  Trolltunga: Trolltunga,
};
const profile = {
  Bleik: profile1,
  Odda: profile2,
  Reinebringen: profile3,
  "Roros Street": profile4,
  Svolvaer: profile5,
  Trolltunga: profile6,
};

const NFTWithProfileCard = ({ name, isVerified }) => {
  return (
    <div className="midbodycardWrapper">
      <img src={NFTs[name]} className="midbodybackground" />
      <div className="midbodycontent">
        <div className="midbodyprofile">
          <img
            src={profile[name]}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div className="midbodyname">
          {name} {isVerified && <MdVerified />}
        </div>
      </div>
    </div>
  );
};

export default NFTWithProfileCard;
