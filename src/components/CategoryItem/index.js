// react
import React from "react";

// styles
import "./categoryItem.styles.scss";

export default function CategoryItem({ title, imageUrl }) {
  return (
    <div className="category-body">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-content">
        <h3>{title}</h3>

        <p>Shop Now</p>
      </div>
    </div>
  );
}
