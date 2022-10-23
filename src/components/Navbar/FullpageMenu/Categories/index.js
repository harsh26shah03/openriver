import React, { useState } from "react";
import {
  MdKeyboardArrowRight,
  MdOutlineExplore,
  MdOutlineCreate,
  MdOutlineLibraryBooks,
  MdLanguage,
} from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { HiMoon } from "react-icons/hi";
import "./style.css";
import Subcategory from "./Subcategory";
import allnfts from "../Categories/images/allnfts-light.svg";
import art from "../Categories/images/art-light.svg";
import collectibles from "../Categories/images/collectibles-light.svg";
import domain from "../Categories/images/domain-names-light.svg";
import music from "../Categories/images/music-light.svg";
import photography from "../Categories/images/photography-category-light.svg";
import solana from "../Categories/images/solana-light.svg";
import sports from "../Categories/images/sports-light.svg";
import tradingcards from "../Categories/images/trading-cards-light.svg";
import utility from "../Categories/images/utility-light.svg";
import virtual from "../Categories/images/virtual-worlds-light.svg";

const categoryComponents = {
  Explore: <MdOutlineExplore />,
  Stats: <ImStatsBars />,
  Resources: <MdOutlineLibraryBooks />,
  Create: <MdOutlineCreate />,
  Languages: <MdLanguage />,
  "Night Mode": <HiMoon />,
  "All NFTs": <img src={allnfts} />,
  "Solana NFTs": <img src={solana} />,
  Art: <img src={art} />,
  Collectibles: <img src={collectibles} />,
  "Domain Names": <img src={domain} />,
  Music: <img src={music} />,
  Photography: <img src={photography} />,
  Sports: <img src={sports} />,
  "Trading Cards": <img src={tradingcards} />,
  Utility: <img src={utility} />,
  "Virtual Worlds": <img src={virtual} />,
};

const Categories = ({ name, isExpandable }) => {
  const [selectedCategory, setSelectedCategory] = useState(false);
  return (
    <>
      <div
        className="categories"
        onClick={() => setSelectedCategory(!selectedCategory)}
      >
        <div className="leftGroup">
          {categoryComponents[name] && <div>{categoryComponents[name]}</div>}
          <span>{name}</span>
        </div>
        <div className="arrow">{isExpandable && <MdKeyboardArrowRight />}</div>
      </div>
      {selectedCategory && isExpandable && <Subcategory name={name} />}
    </>
  );
};

export default Categories;
