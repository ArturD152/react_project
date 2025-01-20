import React from 'react';
import { Link } from 'react-router-dom'; // Исправленный импорт
import './AttractionList.css';

const AttractionList = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>Данные не загружены или отсутствуют.</p>;
  }

  return (
    <div className="grid-column">
      {data.map((item) => (
        <Link to={`/attractions/${item.id}`} key={item.id} className="block" data-category={item.category}>
        <h2>{item.title}</h2>
        <div className='img_wrap'>
          {item.images && item.images.length > 0 ? (
            <img src={item.images[0]} alt={item.title} />
          ) : (
            <p>Изображение отсутствует</p>
          )}
        </div>
      </Link>
      ))}
    </div>
  );
};

export default AttractionList;