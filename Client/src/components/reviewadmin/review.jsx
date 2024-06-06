import { useEffect, useState } from "react";
import TableReview from "./tables/TableReview";
import { Loop } from 'react-icons/io5'; // react-icons

const Review = () => {
  const [actions, setActions] = useState("todos");

  // Lectura del estado global
  const review = useStateGlobal(state => state.review);
  const reviewUnlock = useStateGlobal(state => state.reviewUnlock);
  const error = useStateGlobal(state => state.error);
  // Funciones
  const getReview = useStateGlobal(state => state.getReview);
  const getReviewUnlock = useStateGlobal(state => state.getReviewUnlock);
  const unlockReview = useStateGlobal(state => state.unlockReview);
  const restore = useStateGlobal(state => state.restore);
  const deleteReviewComponent = useStateGlobal(state => state.delete);
  const deleteMessageError = useStateGlobal(state => state.deleteMessage);

  useEffect(() => {
    getReview();
    getReviewUnlock();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      deleteMessageError();
    }, 3000);
  }, [error]);

  return (
    <div className="container mx-auto p-4">  
      <div className="flex space-x-4 mb-4">
        <button 
          className="btn btn-secondary" 
          onClick={() => setActions("todos")}
        >
          Activos
        </button>

        <button 
          className="btn btn-secondary relative" 
          onClick={() => {
            setActions("bloqueados");
            getReviewUnlock();
          }}
        >
          Bloqueados
          {reviewUnlock.length >= 1 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
              {reviewUnlock.length}
            </span>
          )}
        </button>

        <button 
          className="btn btn-secondary" 
          onClick={() => {
            getReview();
            getReviewUnlock();
          }}
        >
          <Loop className="h-5 w-5" />
        </button>
      </div>

      {error && <h1 className="text-red-500">{error}</h1>}

      {actions === "todos" ? (
        <TableReview  
          review={review} 
          functionUnlock={unlockReview} 
          functionDelete={deleteReviewComponent} 
          variantDanger="btn-error"
        />
      ) : (
        <TableReview 
          review={reviewUnlock} 
          functionUnlock={restore} 
          functionDelete={deleteReviewComponent} 
          variantSuccess="btn-error" 
          variantDanger="btn-error"
        />
      )}
    </div>
  );
}

export default Review;
