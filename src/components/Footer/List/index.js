import React from "react";
import "./style.css";

const List = ({ heading, items }) => {
  return (
    <div className="footerSectionTwoRightList">
      <div className="footerSectionTwoRightListHeading">{heading}</div>
      <ul>
        {items.map((listItems, index) => (
          <li key={index}>{listItems}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
