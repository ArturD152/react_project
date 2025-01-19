import React from 'react'
import './FilterBtn.css'

const FilterBtn = () => {
    return (
        <div className="dropdown">
            <button className="dropbtn filter-btn">Фильтр</button>
            <div className="dropdown-content">
                <button onclick="filterByCategory('all')" className="filter-btn">Все</button>
                <button onclick="filterByCategory('parks')" className="filter-btn" >Парки</button>
                <button onclick="filterByCategory('museums')" className="filter-btn" >Музеи</button>
                <button onclick="filterByCategory('attractions')" className="filter-btn" >Достопримечательности</button>
            </div>
        </div>
    )
}

export default FilterBtn