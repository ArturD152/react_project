import React from 'react';
import './AttractionList.css';

const AttractionList = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>Данные не загружены или отсутствуют.</p>;
  }

  return (
    <div className="grid-column">
      {data.map((item) => (
        <div key={item.id} className="block" data-category={item.category}>
          <h2>{item.title}</h2>
          {/* Используем первую картинку из массива images */}
          <div className='img_wrap'> 
          <img src={item.images[0]} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttractionList;