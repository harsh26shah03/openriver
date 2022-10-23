import React, { useState } from "react";
import "./style.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Explore from "./explore";
import Stats from "./stats";
import Resources from "./resources";
import Languages from "./languages";

const subCategory = {
  Explore: <Explore />,
  Stats: <Stats />,
  Resources: <Resources />,
  Languages: <Languages />,
};

const Subcategory = ({ name }) => {
  const [subcategoryVisibility, setSubcategoryVisibility] = useState(true);
  return (
    <div
      className="subMenu"
      style={!subcategoryVisibility ? { display: "none" } : {}}
    >
      <div className="heading">
        <div className="backarrow">
          <MdKeyboardArrowLeft />
        </div>
        <span
          onClick={() => {
            setSubcategoryVisibility(false);
          }}
        >
          {name}
        </span>
      </div>
      {subCategory[name]}
    </div>
  );
};

export default Subcategory;
