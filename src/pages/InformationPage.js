import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/InformationPage.css";

const InformationPage = () => {
  const { id } = useParams(); // ID достопримечательности
  const [item, setItem] = useState(null); // Данные о достопримечательности
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState(null); // Ошибка
  const [reviews, setReviews] = useState([]); // Список отзывов
  const [name, setName] = useState(""); // Имя пользователя для отзыва
  const [text, setText] = useState(""); // Текст отзыва
  const [rating, setRating] = useState("5"); // Оценка отзыва
  const [formError, setFormError] = useState(""); // Ошибка формы

  // Загрузка данных о достопримечательности и отзывах
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Загрузка данных о достопримечательности
        const itemResponse = await fetch(
          `https://6732eb2a2a1b1a4ae1114d3d.mockapi.io/tasks/${id}`
        );
        if (!itemResponse.ok) {
          throw new Error(`Ошибка при загрузке данных: ${itemResponse.statusText}`);
        }
        const itemData = await itemResponse.json();
        setItem(itemData);

        // Загрузка отзывов для конкретной достопримечательности
        const reviewsResponse = await fetch(
          `https://6732eb2a2a1b1a4ae1114d3d.mockapi.io/tasks?itemId=${id}`
        );
        if (!reviewsResponse.ok) {
          throw new Error(`Ошибка при загрузке отзывов: ${reviewsResponse.statusText}`);
        }
        const reviewsData = await reviewsResponse.json();
        setReviews(reviewsData);
      } catch (error) {
        setError(error.message);
        console.error("Ошибка:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Обработка отправки формы отзыва
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валидация полей
    if (!name.trim() || !text.trim()) {
      setFormError("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    // Создание нового отзыва
    const newReview = {
      itemId: id, // ID достопримечательности
      username: name, // Имя пользователя
      users_text: text, // Текст отзыва
      rating: rating, // Оценка
      review_date: new Date().toISOString(), // Дата отзыва
    };

    try {
      // Отправка отзыва на сервер
      const response = await fetch(
        `https://6732eb2a2a1b1a4ae1114d3d.mockapi.io/tasks`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReview),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка при отправке отзыва.");
      }

      // Обновление списка отзывов
      const addedReview = await response.json();
      setReviews([...reviews, addedReview]);

      // Очистка формы
      setName("");
      setText("");
      setRating("5");
      setFormError("");
    } catch (error) {
      setFormError("Ошибка при отправке отзыва. Попробуйте еще раз.");
    }
  };

  // Удаление отзыва
  const handleDeleteReview = async (reviewId) => {
    try {
      const response = await fetch(
        `https://6732eb2a2a1b1a4ae1114d3d.mockapi.io/tasks/${reviewId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка при удалении отзыва.");
      }

      // Обновление списка отзывов
      setReviews(reviews.filter((review) => review.id !== reviewId));
    } catch (error) {
      setFormError("Ошибка при удалении отзыва. Попробуйте еще раз.");
    }
  };

  // Отображение загрузки
  if (loading) {
    return <div>Загрузка...</div>;
  }

  // Отображение ошибки
  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  // Если данные не найдены
  if (!item) {
    return <div>Данные не найдены.</div>;
  }

  return (
    <div className="information-page">
      {/* Заголовок и описание достопримечательности */}
      <h1>{item.title}</h1>
      <p>{item.description}</p>

      {/* Изображения достопримечательности */}
      <div className="image-container">
        {item.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Изображение ${index + 1}`}
            className="image-item"
          />
        ))}
      </div>

      {/* Форма для добавления отзыва */}
      <div className="review-form">
        <h3>Оставить отзыв</h3>
        {formError && <p className="error">{formError}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Имя:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Текст отзыва:</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Оценка:</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num.toString()}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Отправить</button>
        </form>
      </div>

      {/* Список отзывов */}
      <div className="reviews-list">
        <h3>Отзывы</h3>
        {reviews.length === 0 ? (
          <p>Отзывов пока нет.</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="review-item">
              <div className="review-header">
                <strong>{review.username}</strong>
                <span>Оценка: {review.rating}/5</span>
                <button onClick={() => handleDeleteReview(review.id)}>
                  Удалить
                </button>
              </div>
              <p>{review.users_text}</p>
              <small>{new Date(review.review_date).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InformationPage;