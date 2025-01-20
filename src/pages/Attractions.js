import React, { useState, useEffect } from "react";
import FilterBtn from '../components/UI/filter/FilterBtn';
import SortBtn from '../components/UI/sort/SortBtn';
import SearchBtn from "../components/UI/search/SearchBtn";
import AttractionList from "../components/AttractionList/AttractionList";
import Pagination from "../components/pagination/Pagination";
import Loader from "../components/loader/Loader";
import '../styles/Attractions.css';

const Attractions = () => {
  const [data, setData] = useState([]); // Все данные с API
  const [filteredData, setFilteredData] = useState([]); // Отфильтрованные данные
  const [currentPage, setCurrentPage] = useState(1); // Текущая страница
  const [category, setCategory] = useState('all'); // Выбранная категория
  const [sortBy, setSortBy] = useState('title'); // Поле для сортировки
  const [order, setOrder] = useState('desc'); // Порядок сортировки
  const [searchQuery, setSearchQuery] = useState(''); // Поисковый запрос
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки
  const itemsPerPage = 10; // Количество элементов на странице

  // Загрузка данных с MockAPI
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://6732eb2a2a1b1a4ae1114d3d.mockapi.io/tasks');
      if (!response.ok) throw new Error('Ошибка сети');
      const result = await response.json();
      setData(result);
      setFilteredData(result); // Инициализируем отфильтрованные данные
    } catch (error) {
      console.error('Произошла ошибка:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Фильтрация, сортировка и поиск
  useEffect(() => {
    let filtered = data;

    // Фильтрация по категории
    if (category !== 'all') {
      filtered = filtered.filter((item) => item.category === category);
    }

    // Поиск по названию
    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Сортировка
    if (sortBy === 'popularity') {
      filtered.sort((a, b) => (order === 'asc' ? a.popularity - b.popularity : b.popularity - a.popularity));
    } else if (sortBy === 'date') {
      filtered.sort((a, b) => (order === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)));
    }

    setFilteredData(filtered);
    setCurrentPage(1); // Сброс пагинации при изменении фильтров
  }, [data, category, searchQuery, sortBy, order]);

  // Пагинация
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Обработчики
  const handleFilterChange = (category) => {
    setCategory(category);
  };

  const handleSortChange = (sortBy, order) => {
    setSortBy(sortBy);
    setOrder(order);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="section-filter">
      <div className="section-filter__main">
        <div className="filters">
          <FilterBtn onFilterChange={handleFilterChange} />
          <SortBtn onSortChange={handleSortChange} />
          <SearchBtn onSearch={handleSearch} />
        </div>
        <section className="attractions">
          <h1 className="attractions__title">Достопримечательности</h1>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <AttractionList data={currentItems} />
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredData.length / itemsPerPage)}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </section>
      </div>
    </section>
  );
};

export default Attractions;