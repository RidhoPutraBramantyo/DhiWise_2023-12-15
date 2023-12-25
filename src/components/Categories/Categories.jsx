import React, { useState, useEffect } from "react";
import "./Categories.css";
import Category from "../Category/Category";

function Categories() {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    fetch("/json/fnb.json")
      .then((response) => response.json())
      .then((data) => setCategoriesData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="categories">
      {categoriesData.map((category, index) => (
        <Category
          key={index}
          icon={category.icon}
          categoryName={category.categoryName}
          items={category.items}
        />
      ))}
    </div>
  );
}

export default Categories;
