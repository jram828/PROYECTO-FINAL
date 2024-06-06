/*import React from "react";
import { useDispatch } from "react-redux";
import { orderCasos } from "../../redux/actions";
import './orderCasos.css';

function OrderCasos({ currentPage, currentOrder, onOrderChange }) {
  const dispatch = useDispatch();
  
  const handleOrder = (event) => {
    const { value } = event.target;
    onOrderChange(value); 
    dispatch(orderCasos(value, currentPage)); 
    console.log(value, currentPage)
  }

  return (
    <div>
      <select onChange={handleOrder} value={currentOrder}>
        <option value="" disabled hidden>Ordenar por</option>
        <option value="apellidoAbogado">Abogado</option>
        <option value="apellidoCliente">Cliente</option>
      </select>
    </div>
  );
}

export default OrderCasos;*/

import React from "react";
import './orderCasos.css'

function OrderCasos({ onOrderChange }) {
  function handleOrder(event) {
    event.preventDefault();
    const orderValue = event.target.value;
    onOrderChange(orderValue);
  }

  return (
    <div>
  <div>
    <select
      onChange={handleOrder}
      className="w-40 h-8 p-2 border text-xs border-secondary rounded-lg bg-white text-black focus:outline-none"
      defaultValue=""
    >
      <option value="" selected hidden>Ordenar</option>
      <option value="apellidoAbogado" >Abogado</option>
      <option value="apellidoCliente" className="text-black">Cliente</option>
    </select>
  </div>
</div>
  );
}

export default OrderCasos;