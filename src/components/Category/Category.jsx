import React, { useState } from "react";
import "./Category.css";
import FnbCard from "../FnbCard/FnbCard";

function Category({ icon, categoryName, items }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleItemsVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleCardClick = (itemName) => {
    console.log(`Kartu ${itemName} diklik`);
  };

  return (
    <div className="category">
      <h2 className="category-title" onClick={toggleItemsVisibility}>
        <img src={icon} alt={icon} className="category-icon" /> {categoryName}
      </h2>
      {isVisible && (
        <div className="category-items">
          {items.map((item, index) =>
            typeof item === "string" ? (
              <div key={index} className="category-item animate-slide-down">
                {item}
              </div>
            ) : (
              <FnbCard
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                onClick={handleCardClick}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Category;
