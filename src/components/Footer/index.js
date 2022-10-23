import React from "react";
import "./style.css";
import List from "./List";
import { GiRiver } from "react-icons/gi";
import { FaTiktok, FaDiscord, FaRedditAlien } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerSectionOne">
        <div className="footerSectionOneLeft">
          <span>Stay in the loop</span>
          <p style={{ wordWrap: "break-word" }}>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating OpenSea.
          </p>
          <div className="footerSectionOneLeftInput">
            <input placeholder="Your Email Address"></input>
            <button>Sign up</button>
          </div>
        </div>
        <div className="footerSectionOneRight">
          <span>Join the community</span>
          <div className="footerSectionOneRightSocialMedia">
            <div className="footerSectionOneRightSocialMediaItems">
              <AiOutlineTwitter />
            </div>
            <div className="footerSectionOneRightSocialMediaItems">
              {" "}
              <AiOutlineInstagram />
            </div>
            <div className="footerSectionOneRightSocialMediaItems">
              <FaDiscord />
            </div>
            <div className="footerSectionOneRightSocialMediaItems">
              <FaRedditAlien />
            </div>
            <div className="footerSectionOneRightSocialMediaItems">
              <AiFillYoutube />
            </div>
            <div className="footerSectionOneRightSocialMediaItems">
              <FaTiktok />
            </div>
            <div className="footerSectionOneRightSocialMediaItems">
              <HiOutlineMail />
            </div>
          </div>
        </div>
      </div>
      <div className="horizontalRule" />
      <div className="footerSectionTwo">
        <div className="footerSectionTwoLeft">
          <div className="footerSectionTwoLeftIcon">
            <GiRiver />
          </div>
          <span>OpenRiver</span>
          <p style={{ wordWrap: "break-word" }}>
            The worlds first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
        </div>

        <div className="footerSectionTwoRight">
          <div className="footerSectionTwoRightLists">
            <div className="footerSectionTwoRightList">
              <List
                heading={"Marketplace"}
                items={[
                  "All NFTs",
                  "Solana NFTs",
                  "Art",
                  "Collectibles",
                  "Domain Names",
                  "Music",
                  "Photography",
                  "Sports",
                  "Trading Cards",
                  "Utility",
                  "Virtual Worlds ",
                ]}
              />
            </div>
            <div className="footerSectionTwoRightList">
              <List
                heading={"My Account"}
                items={[
                  "Profile",
                  "Watchlist",
                  "Favorites",
                  "My Collections",
                  "Settings",
                ]}
              />
              <List heading={"Stats"} items={["Rankings", "Activity"]} />
            </div>
            <div className="footerSectionTwoRightList">
              <List
                heading={"Resources"}
                items={[
                  "Learn",
                  "Help Center",
                  "Platform Status",
                  "Partners",
                  "Taxes",
                  "Blog",
                  "Docs",
                  "Newsletter",
                ]}
              />
            </div>
            <div className="footerSectionTwoRightList">
              <List
                heading={"Company"}
                items={["About", "Careers", "Ventures", "Grants"]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="horizontalRule" />
      <div className="footerSectionThree">
        <div className="footerSectionThreeLeft">c 2022 Harsh Networks LLC</div>
        <div className="footerSectionThreeRight">
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
