import React from "react";
import Categories from "..";
import Socialmedia from "../../Socialmedia";

const Stats = () => {
  return (
    <>
      <Categories name="Rankings" isExpandable={false} />
      <Categories name="Activity" isExpandable={false} />
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

export default Stats;
