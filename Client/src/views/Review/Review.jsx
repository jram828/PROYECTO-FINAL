import React, { useState } from 'react';
import './ReviewTab.css';

const Review = () => {
    const [reviews, setReviews] = useState([
        { id: 1, name: 'Juan', content: '¡Gran producto!', rating: 5 },
        { id: 2, name: 'Ana', content: 'Me encantó.', rating: 4 },
        { id: 3, name: 'Carlos', content: 'Podría ser mejor.', rating: 3 }
    ]);

    return (
        <div className="review-tab">
            <h2>Reseñas</h2>
            {reviews.length > 0 ? (
                reviews.map(review => (
                    <div key={review.id} className="review">
                        <h3>{review.name}</h3>
                        <p>{review.content}</p>
                        <div className="rating">Calificación: {review.rating} / 5</div>
                    </div>
                ))
            ) : (
                <p>No hay reseñas disponibles.</p>
            )}
        </div>
    );
};

export default Review;
