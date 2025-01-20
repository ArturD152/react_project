import React from "react";
import './Review.css'

const Review = ({ review, onDelete }) => {
  return (
    <div className="review-item">
      <div className="review-header">
        <strong>{review.name}</strong>
        <span>Оценка: {review.rating}/5</span>
        <button onClick={() => onDelete(review.id)}>Удалить</button>
      </div>
      <p>{review.text}</p>
      <small>{new Date(review.date).toLocaleString()}</small>
    </div>
  );
};

export default Review;