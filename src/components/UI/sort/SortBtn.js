import React from 'react'
import './SortBtn.css'

const SortBtn = ({ onSortChange }) => {
    const handleSortChange = (sortBy, order) => {
      onSortChange(sortBy, order);
    };
  
    return (
      <div className="dropdown-sort">
        <button className="dropbtn-sort sort-btn">Сортировка</button>
        <div className="dropdown-sort-content">
          <button className="sort-btn" onClick={() => handleSortChange('popularity', 'desc')}>
            Более популярные
          </button>
          <button className="sort-btn" onClick={() => handleSortChange('popularity', 'asc')}>
            Менее популярные
          </button>
          <button className="sort-btn" onClick={() => handleSortChange('date', 'desc')}>
            Самые новые
          </button>
          <button className="sort-btn" onClick={() => handleSortChange('date', 'asc')}>
            Самые старые
          </button>
        </div>
      </div>
    );
  };
  
  export default SortBtn;