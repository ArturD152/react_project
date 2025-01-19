import React from "react";
import './SearchBtn.css'

const SearchBtn = () => {
    return (
        <form action="" class="header__form">
            <input oninput="filterItems()" class="header__input" id="searchInput" type="text" placeholder="Поиск достопримечательности"/>
        </form>
    )
}

export default SearchBtn