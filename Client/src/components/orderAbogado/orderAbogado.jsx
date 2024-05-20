import React from "react";
import { useDispatch } from "react-redux";
import { orderAbogados } from "../../redux/actions";
import './orderAbogado'

function OrderAbogado() {
  const dispatch = useDispatch();
  
  function handleOrder(event) {
    event.preventDefault();
    dispatch(orderAbogados(event.target.value));
  }

  return (
    <div>
      <div>
      <select onChange={handleOrder}>
          <option value=''>Ordenar:</option>
          <option value='asc'>A-Z</option>
          <option value='desc'>Z-A</option>
        </select>
        
      
      </div>
    </div>
  );
}

export default OrderAbogado;