// FilterDropdown.js
import React from 'react';

function FilterDropdown({ categorySelect, onCategoryChange }) {
  return (
    <div className="dropdown filter">
      <label htmlFor="category">Filter by Category:</label><br /><br />
      <select id="category" onChange={onCategoryChange} value={categorySelect}>
        <option value="all">All</option>
        <option value="BMW M Series">BMW M Series</option>
        <option value="Bugatti Classics">Bugatti Classics</option>
        <option value="Rolls-Royce">Rolls-Royce</option>
      </select>
    </div>
  );
}

export default FilterDropdown;
