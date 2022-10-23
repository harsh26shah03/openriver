import React, { useState } from "react";
import "./style.css";
import { HiChevronDown } from "react-icons/hi";
import Strips from "./Strips";

const Collection = () => {
  const [isTrending, setIsTrending] = useState(true);
  const [isTop, setIsTop] = useState(false);

  const stripsData = [
    {
      name: "Ram Mandir",
      price: "1M",
      isVerified: true,
      volume: "1T",
      change: "+1000",
    },
    {
      name: "What's in a name?",
      price: "21",
      isVerified: true,
      volume: "90",
      change: "-60",
    },
    {
      name: "Miniscule",
      price: "3",
      isVerified: false,
      volume: "50",
      change: "+78",
    },
    {
      name: "Unutilized",
      price: "0.03",
      isVerified: false,
      volume: "12",
      change: "+98",
    },
    {
      name: "Careful Guy",
      price: "3",
      isVerified: true,
      volume: "34",
      change: "-43",
    },
    {
      name: "Artistic Girl",
      price: "30",
      isVerified: true,
      volume: "500",
      change: "-8",
    },
    {
      name: "Sarcastic enough",
      price: "39",
      isVerified: false,
      volume: "490",
      change: "-98",
    },
    {
      name: "Indian Industry of Movies",
      price: "0.09",
      isVerified: false,
      volume: "0.2",
      change: "+0.01",
    },
    {
      name: "Rat Eater - The Novel",
      price: "85",
      isVerified: true,
      volume: "362",
      change: "+12",
    },
    {
      name: "India's Most Fearless",
      price: "47",
      isVerified: true,
      volume: "143",
      change: "+83",
    },
  ];
  if (isTop) {
    stripsData.reverse();
  }

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
            style={!isTop ? { color: "rgb(167, 167, 167)" } : {}}
          >
            24h {<HiChevronDown />}
          </div>
          <div className="collectionHeaderRightSeeMore">View All</div>
        </div>
      </div>

      <div className="collectionBody">
        <div className="collectionBodyLeft">
          <div className="collectionBodyHeading">
            <div className="collectionBodyHeadingCollection">COLLECTION</div>
            <div className="collectionBodyHeadingFloor">FLOOR</div>
            <div className="collectionBodyHeadingVolume">VOLUME</div>
          </div>

          {[...stripsData.slice(0, 5)].map((data, index) => (
            <Strips
              key={index + 1}
              index={index + 1}
              name={data.name}
              price={data.price}
              isVerified={data.isVerified}
              volume={data.volume}
              change={isTop ? data.change : null}
            />
          ))}
        </div>
        <div className="collectionBodyRight">
          <div className="collectionBodyHeading">
            <div className="collectionBodyHeadingCollection">COLLECTION</div>
            <div className="collectionBodyHeadingFloor">FLOOR</div>
            <div className="collectionBodyHeadingVolume">VOLUME</div>
          </div>
          {[...stripsData.slice(5)].map((data, index) => (
            <Strips
              key={index + 6}
              index={index + 6}
              name={data.name}
              price={data.price}
              isVerified={data.isVerified}
              volume={data.volume}
              change={isTop ? data.change : null}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
