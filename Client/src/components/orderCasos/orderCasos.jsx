import React from "react";
import { useDispatch } from "react-redux";
import { orderCasos } from "../../redux/actions";
import './orderCasos.css'

function OrderCasos() {
  const dispatch = useDispatch();
  
  function handleOrder(event) {
    event.preventDefault();
    dispatch(orderCasos(event.target.value));
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

export default OrderCasos;