import React from "react";
import "./Review.css";

const ReviewsList = ({ reviews, onDelete }) => {
  return (
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
              <button onClick={() => onDelete(review.id)}>Удалить</button>
            </div>
            <p>{review.users_text}</p>
            <small>{new Date(review.review_date).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewsList;