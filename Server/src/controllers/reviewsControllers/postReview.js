import { models } from "../../DB.js";
const { Review } = models;
const createReview = async (cedulaCliente, puntuacion, comentario) => {
  const newReview = await Review.create({
    cedulaCliente,
    puntuacion,
    comentario,
  });

  return newReview;
};

export { createReview };
