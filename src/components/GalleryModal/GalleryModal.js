import React, { useState } from "react";
import "./GalleryModal.css";

const GalleryModal = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-modal">
      <div className="gallery-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={images[currentIndex]} alt={`Изображение ${currentIndex + 1}`} />
        <div className="navigation">
          <button onClick={handlePrev}>‹</button>
          <button onClick={handleNext}>›</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;