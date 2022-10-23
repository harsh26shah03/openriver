import React from "react";
import "./style.css";
import { FaTiktok, FaDiscord, FaRedditAlien } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Socialmedia = () => {
  return (
    <div className="socialmedia">
      <ul>
        <li>
          <AiOutlineTwitter />
        </li>
        <li>
          <AiOutlineInstagram />
        </li>
        <li>
          <FaDiscord />
        </li>
        <li>
          <FaRedditAlien />
        </li>
        <li>
          <AiFillYoutube />
        </li>
        <li>
          <FaTiktok />
        </li>
      </ul>
    </div>
  );
};

export default Socialmedia;
