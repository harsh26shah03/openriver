import React from "react";
import "./style.css";
import Categories from "./Categories";
import Socialmedia from "./Socialmedia";

const FullPageMenu = () => {
  return (
    <div className="fullPageMenu">
      <div>
        <Categories name="Explore" isExpandable={true} />
        <Categories name="Stats" isExpandable={true} />
        <Categories name="Resources" isExpandable={true} />
        <Categories name="Create" isExpandable={false} />
        <Categories name="Languages" isExpandable={true} />
        <Categories name="Night Mode" isExpandable={false} />
        <div className="button">Connect Wallete</div>
      </div>
      <Socialmedia />
    </div>
  );
};

export default FullPageMenu;
