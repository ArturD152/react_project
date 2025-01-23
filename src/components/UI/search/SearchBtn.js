import React, { useState } from 'react';
import './SearchBtn.css';

const SearchBtn = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <form className="section-filter__form">
      <input
        className="section-filter__input"
        type="text"
        placeholder="Поиск достопримечательности"
        value={query}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchBtn;