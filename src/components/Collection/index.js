import React, { useState } from "react";
import "./style.css";
import { HiChevronDown } from "react-icons/hi";
import Strips from "./Strips";

const Collection = () => {
  const [isTrending, setIsTrending] = useState(true);
  const [isTop, setIsTop] = useState(false);

  return (
    <div className="collectionWrapper">
      <div className="collectionHeader">
        <div className="collectionHeaderLeft">
          <div
            className="collectionHeaderLeftTrending"
            onClick={() => {
              setIsTrending(true);
              setIsTop(false);
            }}
            style={
              isTrending
                ? {
                    borderBottom: "2px solid rgb(70, 70, 70)",
                    color: "rgb(70, 70, 70)",
                  }
                : { borderBottom: "none" }
            }
          >
            Trending
          </div>
          <div
            className="collectionHeaderLeftTop"
            onClick={() => {
              setIsTop(true);
              setIsTrending(false);
            }}
            style={
              isTop
                ? {
                    borderBottom: "2px solid rgb(70, 70, 70)",
                    color: "rgb(70, 70, 70)",
                  }
                : { borderBottom: "none" }
            }
          >
            Top
          </div>
        </div>
        <div className="collectionHeaderRight">
          <div
            className="collectionHeaderRightTime"
            style={isTop ? { color: "rgb(167, 167, 167)" } : {}}
          >
            24h {<HiChevronDown />}
          </div>
          <div className="collectionHeaderRightSeeMore">View All</div>
        </div>
      </div>
      <Strips
        index={"1"}
        name={"Harsh"}
        price={"21"}
        isVerified={true}
        volume={"500"}
      />
    </div>
  );
};

export default Collection;
