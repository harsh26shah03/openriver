import React from "react";
import Categories from "..";
import Socialmedia from "../../Socialmedia";

const Languages = () => {
  return (
    <>
      <Categories name="English" isExpandable={false} />
      <Categories name="Español" isExpandable={false} />
      <Categories name="Deutsch" isExpandable={false} />
      <Categories name="Français" isExpandable={false} />
      <Categories name="日本語" isExpandable={false} />
      <Categories name="한국어" isExpandable={false} />
      <Categories name="中文 (简体)" isExpandable={false} />
      <Categories name="中文 (繁体)" isExpandable={false} />
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

export default Languages;
