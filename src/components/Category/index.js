import React from "react";
import CategoryCard from "./CategoryCard";
import "./style.css";

const Category = () => {
  return (
    <div className="Categorywrapper">
      <div className="Categoryheading">
        <div>Browse by category</div>
      </div>
      <CategoryCard name="Art" />
      <CategoryCard name="Collectibles" />
      <CategoryCard name="Domain Names" />
      <CategoryCard name="Music" />
      <CategoryCard name="Photography" />
      <CategoryCard name="Trading Cards" />
      <CategoryCard name="Utility" />
      <CategoryCard name="Virtual Worlds" />
    </div>
  );
};

export default Category;
