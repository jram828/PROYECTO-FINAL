import { useEffect, useState } from "react";
import { Button} from 'react-bootstrap';
import { useStateGlobal } from "../../zustand/stateGlobal";
import TableReview from "./tables/TableReview";
import style from './Review.module.css'
import LoopIcon from '@mui/icons-material/Loop';

const Review = ()=> {
  const [actions, setActions] = useState("todos");

  //lectura estado global
   const review = useStateGlobal(state => state.review)
   const reviewUnlock = useStateGlobal(state => state.reviewUnlock)
   const error = useStateGlobal(state => state.error)
   //funciones
   const getReview = useStateGlobal(state => state.getReview);
   const getReviewUnlock = useStateGlobal(state => state.getReviewUnlock);
   const unlockReview = useStateGlobal(state => state.unlockReview);
   const restore = useStateGlobal(state => state.restore);
   const deleteReviewComponent = useStateGlobal(state => state.delete);
   const deleteMessageError = useStateGlobal(state => state.deleteMessage);

   useEffect(()=> {
    getReview()
    getReviewUnlock()

   }, [])

   useEffect(()=>{
    setTimeout(()=>{
      deleteMessageError()
    }, 3000)  
   }, [error])

    return (
        <div className="container">  
          <div className={style.subContainer}>
            <Button variant="secondary" className={style.btn} onClick={()=> setActions("todos")}>Activos</Button>

            <Button variant="secondary" className={`${style.btn} ${style.btnUnlock}`} onClick={()=> {
              setActions("bloqueados");
              getReviewUnlock()
              }}>
                Bloqueados
                {reviewUnlock.length >= 1 ? <span>{reviewUnlock.length}</span> : ""}
              </Button>

            <Button variant="secondary" className={style.btn} onClick={()=>{
              getReview();
              getReviewUnlock()
            }
            }><LoopIcon /></Button>
            
          </div>
            {error && <h1>{error}</h1>}
            {
              actions === "todos" ? (<TableReview  review={review} functionUnlock={unlockReview} functionDelete={deleteReviewComponent} variantDanger="danger"/>) : (<TableReview review={reviewUnlock} functionUnlock={restore} functionDelete={deleteReviewComponent} variantSuccess="danger" variantDanger="danger"/>)
            }
           

             
        </div>
    )
}

export default Review;