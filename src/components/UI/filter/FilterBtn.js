import React from 'react';
import './FilterBtn.css';

const FilterBtn = ({ onFilterChange }) => {
  const handleCategoryChange = (category) => {
    onFilterChange(category);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn filter-btn">Фильтр</button>
      <div className="dropdown-content">
        <button onClick={() => handleCategoryChange('all')} className="filter-btn">
          Все
        </button>
        <button onClick={() => handleCategoryChange('парки')} className="filter-btn">
          Парки
        </button>
        <button onClick={() => handleCategoryChange('музеи')} className="filter-btn">
          Музеи
        </button>
        <button onClick={() => handleCategoryChange('достопримечательности')} className="filter-btn">
          Достопримечательности
        </button>
      </div>
    </div>
  );
};

export default FilterBtn;