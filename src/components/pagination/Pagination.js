import React from 'react';
import './Pagination.css'

const Pagination = ({ totalPages, onPageChange }) => {
    return (
      <div className="pagination__button">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} onClick={() => onPageChange(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;