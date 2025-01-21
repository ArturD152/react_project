import React from "react";
import "./Slider.css";

const Slider = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  return (
    <div className="modal open">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="image-wrapper">
          <img src={images[currentIndex]} alt={`Изображение ${currentIndex + 1}`} />
        </div>
        <div className="navigation">
          <button onClick={onPrev}>Предыдущая</button>
          <button onClick={onNext}>Следующая</button>
        </div>
        <span className="close" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Slider;