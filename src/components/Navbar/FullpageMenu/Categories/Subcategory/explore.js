import React from "react";
import Categories from "../../Categories";
import Socialmedia from "../../Socialmedia";

const Explore = () => {
  return (
    <>
      <Categories name="All NFTs" isExpandable={false} />
      <Categories name="Solana NFTs" isExpandable={false} />
      <Categories name="Art" isExpandable={false} />
      <Categories name="Collectibles" isExpandable={false} />
      <Categories name="Domain Names" isExpandable={false} />
      <Categories name="Music" isExpandable={false} />
      <Categories name="Photography" isExpandable={false} />
      <Categories name="Trading Cards" isExpandable={false} />
      <Categories name="Utility" isExpandable={false} />
      <Categories name="Virtual Worlds" isExpandable={false} />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Socialmedia />
      </div>
    </>
  );
};

export default Explore;
