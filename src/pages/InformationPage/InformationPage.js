import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import ReviewForm from "../../components/Review/ReviewForm";
import ReviewsList from "../../components/Review/ReviewList";
import "./InformationPage.css";

const InformationPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemResponse = await fetch(
          `https://6732eb2a2a1b1a4ae1114d3d.mockapi.io/tasks/${id}`
        );
        if (!itemResponse.ok) throw new Error("Ошибка при загрузке данных");
        const itemData = await itemResponse.json();
        setItem(itemData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmitReview = ({ name, text, rating }) => {
    const newReview = {
      id: Date.now(),
      username: name,
      users_text: text,
      rating,
      review_date: new Date().toISOString(),
    };
    setReviews([...reviews, newReview]);
  };

  const handleDeleteReview = (reviewId) => {
    setReviews(reviews.filter((review) => review.id !== reviewId));
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
    );
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!item) return <div>Данные не найдены.</div>;

  return (
    <div className="information-page">
      <h1>{item.title}</h1>
      <p>{item.users_text}</p>

      <div className="image-container">
        {item.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Изображение ${index + 1}`}
            className="image-item"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {isModalOpen && (
        <Slider
          images={item.images}
          currentIndex={currentImageIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}

      <ReviewForm onSubmit={handleSubmitReview} />
      <ReviewsList reviews={reviews} onDelete={handleDeleteReview} />
    </div>
  );
};

export default InformationPage;