import React from "react";
import FilterBtn from '../components/UI/filter/FilterBtn'
import SortBtn from '../components/UI/sort/SortBtn'
import SearchBtn from "../components/UI/search/SearchBtn";


const Attractions = () => {
  return (
    <section class="section-filter">
            <div class="section-filter__main">
                <div class="filters">
                    <FilterBtn />
                    <SortBtn />
                    <SearchBtn />
                </div>
                <section class="section">
                    <h1 class="section__title">
                        Достопримечательности
                    </h1>
                    <div id="data-container" class="grid-column"></div>
                    <div id="loader">
                        <p>Загрузка</p>
                    </div>
                        
                    <div id="pagination" class="pagination__button"></div>
                </section>
                    
                </div>
        </section>
  )
};

export default Attractions;