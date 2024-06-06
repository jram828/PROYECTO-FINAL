import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview, fetchReviews } from '../../../redux/actions';
import ReviewList from '../List/ReviewsList';

const ReviewForm = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  const reviewError = useSelector((state) => state.reviewError);
  const [nuevoComentario, setNuevoComentario] = useState('');
  const [puntuacion, setPuntuacion] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const handleChange = (event) => {
    setNuevoComentario(event.target.value);
  };

  const handlePuntuacion = (rating) => {
    setPuntuacion(rating);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (puntuacion === 0) {
      setError('Por favor, selecciona una puntuación antes de enviar tu comentario.');
    } else {
      try {
        await dispatch(addReview(nuevoComentario, puntuacion));
        await dispatch(fetchReviews());
        setNuevoComentario('');
        setPuntuacion(0);
        setError('');
      } catch (error) {
        console.error('Error al enviar la reseña:', error);
        setError('Error al enviar la reseña. Por favor, intenta nuevamente.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center rounded-lg min-h-screen p-6 bg-white text-black">
      <div className="space-y-6 h-full p-6 bg-secondary rounded-lg shadow-md text-black">
        <h1 className="text-2xl font-bold text-black text-center">Escribir una Reseña</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <textarea
              value={nuevoComentario}
              onChange={handleChange}
              placeholder="Escribe tu reseña"
              className="w-full h-32 p-2 border border-black rounded-lg bg-secondary text-black focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="puntuacion" className="input input-md text-md !border-black !rounded-lg input-secondary flex items-center !text-black">
              Puntuación:
              <input
                type="number"
                value={puntuacion}
                onChange={(e) => handlePuntuacion(e.target.value)}
                placeholder="Puntuación"
                min="0"
                max="5"
                id="puntuacion"
                className="grow ml-2 text-black"
              />
            </label>
          </div>
          <div className="rating rating-lg rating-half">
            {[...Array(10)].map((_, index) => (
              <input
                key={index}
                type="radio"
                name="rating-10"
                className={`bg-green-500 mask mask-star-2 ${index % 2 === 0 ? 'mask-half-1' : 'mask-half-2'}`}
                checked={Math.ceil(puntuacion * 2) === index + 1}
                onChange={() => handlePuntuacion((index + 1) / 2)}
              />
            ))}
          </div>
          <div className="flex flex-row items-center justify-center">
            <button type="submit" className="btn btn-xs border border-success bg-white hover:bg-white !w-36">
              Enviar Reseña
            </button>
          </div>
        </form>
        
        {error && <p className="text-red-500">{error}</p>}
        {reviewError && <p className="text-red-500">{reviewError}</p>}
        
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};


export default ReviewForm;