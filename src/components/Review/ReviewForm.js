import React, { useState } from "react";
import "./Review.css";

const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState("5");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      setFormError("Пожалуйста, заполните все обязательные поля.");
      return;
    }
    onSubmit({ name, text, rating });
    setName("");
    setText("");
    setRating("5");
    setFormError("");
  };

  return (
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
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
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
  );
};

export default ReviewForm;