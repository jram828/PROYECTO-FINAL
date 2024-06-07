// src/components/Review/List/ReviewList.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, fetchReviewsAll } from '../../../redux/actions';
import loading from "../../../assets/loading.gif";

const ReviewList = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  const pages = useSelector((state)=> state.pages)
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    dispatch(fetchReviewsAll())
      .then(() => {
        // Después de que fetchReviewsAll haya completado, se actualiza el estado y se llama a fetchReviews
        dispatch(fetchReviews(currentPage));
        setLoadingState(false)
      })
      .catch((error) => {
        console.error('Error al obtener todas las reseñas:', error);
      });
  }, [dispatch, currentPage]);
  
  const totalPages = Math.ceil(pages?.length / 3);
  

  console.log('pages', pages)

  console.log('reviews', reviews)


  const handlePageChange = (newPage) => {
    console.log("currentPage antes de la actualización:", currentPage);
  setCurrentPage(newPage);
  console.log("currentPage después de la actualización:", currentPage);
  };

  
  console.log('pages', pages)
  console.log(totalPages)

  return (
    <div className="space-y-6">

      <div className="loading-container" style={{ display: loadingState ? 'block' : 'none' }}>
        
        <img className="loading-image" src={loading} alt="loading" />
      </div>

      {reviews?.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="space-y-6 h-full p-6 bg-secondary rounded-lg shadow-md text-black mt-4">
            <h3 className="text-xl font-bold text-black text-center">Reseña #{(currentPage - 1) * 5 + index + 1}</h3>
            <p><strong>Comentario:</strong> {review.comentario}</p>
            <div className="rating rating-lg rating-half">
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
        undefined
      )}

      {/* Botones de paginación */}
      <div className='flex justify-center'>
      <div className="pagination join self-center">
        {currentPage > 1 && (
          <button
          onClick={() => handlePageChange(currentPage - 1)}
            className="join-item btn btn-xs btn-accent"
          >
            &lt;&lt;
          </button>
        )}
        <span className="join-item btn btn-xs btn-accent">Página {currentPage}</span>
        {currentPage < totalPages && (
          <button
          onClick={() => handlePageChange(currentPage + 1)}
            className="join-item btn btn-xs btn-accent"
          >
            &gt;&gt;
          </button>
        )}
      </div>
      </div>
    </div>
  );
};

export default ReviewList;