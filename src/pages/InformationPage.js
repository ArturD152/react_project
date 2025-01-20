import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/InformationPage.css";

const InformationPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://6732eb2a2a1b1a4ae1114d3d.mockapi.io/tasks?id=${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setItem(data[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length
    );
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!item) {
    return <div>Данные не найдены</div>;
  }

  // Отображаем только первые 3 изображения
  const displayedImages = item.images.slice(0, 3);

  return (
    <div className="information-page">
      <div className="image-container">
        {displayedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Изображение ${index + 1}`}
            className="image-item"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Модальное окно */}
      <div className={`modal ${isModalOpen ? "open" : ""}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="image-wrapper">
            <img src={item.images[selectedImageIndex]} alt="Изображение" />
          </div>
          <div className="navigation">
            <button onClick={handlePrev}>Предыдущая</button>
            <button onClick={handleNext}>Следующая</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;