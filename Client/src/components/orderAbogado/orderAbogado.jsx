import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderAbogados } from "../../redux/actions";
import './orderAbogado'

function OrderAbogado() {
  const dispatch = useDispatch();
  
  function handleOrder(event) {
    event.preventDefault();
    dispatch(orderAbogados());
  }

  return (
    <div>
      <div>
        <button onClick={handleOrder}>Ordenar A-Z</button>
      </div>
      <div>
      </div>
    </div>
  );
}

export default OrderAbogado;