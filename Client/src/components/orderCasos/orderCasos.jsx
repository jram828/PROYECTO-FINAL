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
      <select
        onChange={handleOrder}
        className="w-40 h-8 p-2 border text-xs border-secondary rounded-lg bg-white text-black focus:outline-none"
        defaultValue=""
      >
        <option value="" selected hidden>Ordenar por</option>
        <option value="apellidoAbogado" className="text-black">Abogado</option>
        <option value="apellidoCliente" className="text-black">Cliente</option>
      </select>
    </div>
  </div>
  );
}

export default OrderCasos;