import "./style.css";
import React from "react";
import { MdVerified } from "react-icons/md";
import FjordNorway from "./FjordNorway.jpg";
import GlacierCave from "./GlacierCave.jpg";
import LofotenNorway from "./LofotenNorway.jpg";
import RoyalDanishGarden from "./RoyalDanishGardens.jpg";
import SakgenDenmark from "./SkagenDenmark.jpg";
import TheTrollWall from "./TheTrollWall.jpg";

import profile1 from "./profile1.gif";
import profile2 from "./profile2.gif";
import profile3 from "./profile3.gif";
import profile4 from "./profile4.gif";
import profile5 from "./profile5.gif";
import profile6 from "./profile6.gif";

const NFTs = {
  "Fjord Norway": FjordNorway,
  "Glacier Cave": GlacierCave,
  "Lofoten Norway": LofotenNorway,
  "Royal Danish Garden": RoyalDanishGarden,
  "Skagen Denmark": SakgenDenmark,
  "The Troll Wall": TheTrollWall,
};
const profile = {
  "Fjord Norway": profile1,
  "Glacier Cave": profile2,
  "Lofoten Norway": profile3,
  "Royal Danish Garden": profile4,
  "Skagen Denmark": profile5,
  "The Troll Wall": profile6,
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
