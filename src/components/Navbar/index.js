import React, { useEffect, useState } from "react";
import "./style.css";
import {
  MdOutlineShoppingCart,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiRiver } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import { TbMenu2 } from "react-icons/tb";
import { BiSearchAlt2 } from "react-icons/bi";
import FullPageMenu from "./FullpageMenu";
import Explore from "./FullpageMenu/Categories/Subcategory/explore";
import Stats from "./FullpageMenu/Categories/Subcategory/stats";
import Resources from "./FullpageMenu/Categories/Subcategory/resources";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isMenuOpen) {
    document.documentElement.style.overflow = "hidden";
    if (document.querySelector(".fullPageMenu"))
      document.querySelector(".fullPageMenu").style.overflow = "scroll";
  } else document.documentElement.style.overflow = "scroll";

  window.addEventListener("scroll", (event) => {
    if (isMenuOpen === true) {
      setIsMenuOpen(false);
    } else {
      document.querySelector(".navbar").style.backgroundColor = "#ffffff";

      if (document.documentElement.scrollTop === 0) {
        document.querySelector(".navbar").style.backgroundColor =
          "rgba(0,0,0,0)";
      }
    }
  });

  return (
    <>
      <nav
        className="navbar"
        style={
          isMenuOpen
            ? { backgroundColor: "#ffffff" }
            : { backgroundColor: "rgba(0,0,0,0)" }
        }
      >
        <div className="logo">
          <div className="icon">
            <GiRiver />
          </div>
          <span>OpenRiver</span>
        </div>
        <div
          className="input"
          style={input !== "" ? { backgroundColor: "#ffffff" } : {}}
        >
          <div className="search">
            <AiOutlineSearch />
          </div>
          <input
            style={input !== "" ? { backgroundColor: "#ffffff" } : {}}
            placeholder="Search items, collections, and accounts"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          ></input>
          {input && (
            <div className="close" onClick={() => setInput("")}>
              <VscClose />
            </div>
          )}
        </div>
        <div className="menu">
          <ul>
            <li className="exlporenav">
              <a src="#">Explore</a>
              <div className="explorehover">
                <Explore />
              </div>
            </li>
            <li className="statsnav">
              <a src="#">Stats</a>
              <div className="statshover">
                <Stats />
              </div>
            </li>
            <li className="resourcesnav">
              <a src="#">Resources</a>
              <div className="resourceshover">
                <Resources />
              </div>
            </li>
            <li>
              <a src="#">Create</a>
            </li>
          </ul>
        </div>
        <div className="extraMenu">
          <ul>
            <li className="bigsearch">
              <a src="">
                <BiSearchAlt2 />
              </a>
            </li>
            <li className="profile">
              <a src="">
                <CgProfile />
              </a>
            </li>
            <li className="wallete">
              <a src="">
                <MdOutlineAccountBalanceWallet />
              </a>
            </li>
            <li className="cart">
              <a src="">
                <MdOutlineShoppingCart />
              </a>
            </li>
            <li
              className="hamburger"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                document.documentElement.scrollTop = 0;
              }}
            >
              <a src="">{!isMenuOpen ? <TbMenu2 /> : <VscClose />}</a>
            </li>
          </ul>
        </div>
      </nav>
      {isMenuOpen && <FullPageMenu />}
    </>
  );
};

export default Navbar;
