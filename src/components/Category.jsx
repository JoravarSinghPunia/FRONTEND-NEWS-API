import React from "react";

export default function CategorySelector({ onSelectCategory }) {
  return (
    <div className="category-selector">
      <label htmlFor="category">Select a category:</label>
      <select id="category" onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
        <option value="cooking">Cooking</option>
      </select>
    </div>
  );
}
