import React from 'react'
import './SortBtn.css'

const SortBtn = () => {
    return (
        <div className="dropdown-sort">
            <button className="dropbtn-sort sort-btn">Сортировка</button>
            <div className="dropdown-sort-content">
                <button className="sort-btn" data-sort="popularity-desc">Более популярные</button>
                <button className="sort-btn" data-sort="popularity-asc">Менее популярные</button>
                <button className="sort-btn" data-sort="date-desc">Самые новые</button>
                <button className="sort-btn" data-sort="date-asc">Самые старые</button>
            </div>
        </div>
    )
}

export default SortBtn