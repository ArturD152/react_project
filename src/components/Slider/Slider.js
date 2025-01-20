import React from "react";

const Slider = ({ images, onImageClick }) => {
  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Изображение ${index + 1}`}
          className="slider__image"
          onClick={() => onImageClick(index)} // Передаём индекс изображения
        />
      ))}
    </div>
  );
};

export default Slider;