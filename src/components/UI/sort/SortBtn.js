import React from 'react'

const SortBtn = () => {
    return (
        <div class="dropdown-sort">
            <button class="dropbtn-sort sort-btn">Сортировка</button>
            <div class="dropdown-sort-content">
                <button class="sort-btn" data-sort="popularity-desc">Более популярные</button>
                <button class="sort-btn" data-sort="popularity-asc">Менее популярные</button>
                <button class="sort-btn" data-sort="date-desc">Самые новые</button>
                <button class="sort-btn" data-sort="date-asc">Самые старые</button>
            </div>
        </div>
    )
}