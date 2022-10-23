import React from "react";
import "./style.css";

const List = ({ heading, items }) => {
  return (
    <div className="footerSectionTwoRightList">
      <div className="footerSectionTwoRightListHeading">{heading}</div>
      <ul>
        {items.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
