import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview, fetchReviews } from "../../../redux/actions";
import ReviewList from "../List/ReviewsList";

const ReviewForm = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  const reviewError = useSelector((state) => state.reviewError);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [puntuacion, setPuntuacion] = useState(0);
  const [error, setError] = useState("");
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const [dataReview, setDataReview] = useState({
    puntuacion: "",
    comentario: "",
    cedulaCliente: user.cedulaCliente,
  });

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const handleChangeReview = (e) => {
    setDataReview({
      ...dataReview,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (event) => {
    setNuevoComentario(event.target.value);
  };

  const handlePuntuacion = (rating) => {
    setPuntuacion(rating);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const datos = {
      puntuacion,
      comentario: dataReview.comentario,
      cedulaCliente: user.cedulaCliente,
    };

    try {
      await dispatch(addReview(datos));
      await dispatch(fetchReviews());
      setNuevoComentario("");
      setPuntuacion(0);
      setError("");
    } catch (error) {
      console.error("Error al enviar la reseña:", error);
      setError("Error al enviar la reseña. Por favor, intenta nuevamente.");
    }
  };

  return (
    <div className="flex items-center justify-center rounded-lg min-h-screen p-6 bg-white text-black">
      <div className="flex flex-row space-x-6 w-full max-w-6xl">
        <div className="space-y-6 h-full p-6 bg-secondary rounded-lg shadow-md text-black flex-grow self-center">
          <h1 className="text-2xl font-bold text-black text-center">
            Escribir una Reseña
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <textarea
                name="comentario"
                value={dataReview.comentario}
                onChange={handleChangeReview}
                placeholder="Escribe tu reseña"
                className="w-full h-32 p-2 border border-black rounded-lg bg-secondary text-black focus:outline-none"
                disabled={user.matricula}
              />
            </div>
            <div>
              <label
                htmlFor="puntuacion"
                className="input input-md text-md !border-black !rounded-lg input-secondary flex items-center !text-black !w-full"
              >
                Puntuación:
                <input
                  type="number"
                  name="puntuacion"
                  value={dataReview.puntuacion}
                  onChange={handleChangeReview}
                  placeholder="Puntuación"
                  min="0"
                  max="5"
                  id="puntuacion"
                  className="grow ml-2 text-black"
                  disabled={user.matricula}
                />
              </label>
            </div>
            <div className="rating rating-md rating-half flex justify-center">
              {[...Array(10)].map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name="comentario"
                  className={`bg-green-500 mask mask-star-2 ${
                    index % 2 === 0 ? "mask-half-1" : "mask-half-2"
                  }`}
                  checked={Math.ceil(puntuacion * 2) === index + 1}
                  onChange={() => handlePuntuacion((index + 1) / 2)}
                  disabled={user.matricula}
                />
              ))}
            </div>
            <div className="flex flex-row items-center justify-center">
              <button
                type="submit"
                className="btn btn-xs border border-success bg-white hover:bg-white !w-36"
                disabled={user.matricula}
              >
                Enviar Reseña
              </button>
            </div>
          </form>

          {error && <p className="text-red-500">{error}</p>}
          {reviewError && <p className="text-red-500">{reviewError}</p>}
        </div>

        <div className="flex-grow">
          <ReviewList key={reviews.length} reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
