import React from "react";
import Categories from "..";
import Socialmedia from "../../Socialmedia";

const Resources = () => {
  return (
    <>
      <Categories name="Learn" isExpandable={false} />
      <Categories name="Help Center" isExpandable={false} />
      <Categories name="Platform Status" isExpandable={false} />
      <Categories name="Partners" isExpandable={false} />
      <Categories name="Taxes" isExpandable={false} />
      <Categories name="Blog" isExpandable={false} />
      <Categories name="Docs" isExpandable={false} />
      <Categories name="Newsletter" isExpandable={false} />
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

export default Resources;
