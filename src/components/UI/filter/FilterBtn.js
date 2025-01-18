import React from 'react'


const FilterBtn = () => {
    return (
        <div class="dropdown">
            <button class="dropbtn filter-btn">Фильтр</button>
            <div class="dropdown-content">
                <button onclick="filterByCategory('all')" class="filter-btn">Все</button>
                <button onclick="filterByCategory('parks')" class="filter-btn" >Парки</button>
                <button onclick="filterByCategory('museums')" class="filter-btn" >Музеи</button>
                <button onclick="filterByCategory('attractions')" class="filter-btn" >Достопримечательности</button>
            </div>
        </div>
    )
}