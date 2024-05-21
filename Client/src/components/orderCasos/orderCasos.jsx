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
          <option value=''>Ordenar por:</option>
          <option value='apellidoAbogado'>Abogado</option>
          <option value='apellidoCliente'>Cliente</option>
        </select>
      
      </div>
    </div>
  );
}

export default OrderCasos;