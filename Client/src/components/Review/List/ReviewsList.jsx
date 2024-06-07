// src/components/Review/List/ReviewsList.jsx
import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div className="space-y-6">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="space-y-6 p-4 bg-secondary rounded-lg shadow-md text-black mt-4">
            <h3 className="text-xl font-bold text-black text-center">Reseña #{index + 1}</h3>
            <p><strong>Comentario:</strong> {review.comentario}</p>
            <div className="rating rating-md rating-half">
              {[...Array(10)].map((_, starIndex) => (
                <input
                  key={starIndex}
                  type="radio"
                  name={`rating-${index}`}
                  className={`bg-green-500 mask mask-star-2 ${starIndex % 2 === 0 ? 'mask-half-1' : 'mask-half-2'}`}
                  checked={Math.ceil(review.puntuacion * 2) === starIndex + 1}
                  readOnly
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No hay reseñas disponibles</p>
      )}
    </div>
  );
};

export default ReviewList;
