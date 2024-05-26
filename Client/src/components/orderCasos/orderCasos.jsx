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
      <select onChange={handleOrder} className="input select-bordered flex items-center text-lg pl-2 custom-select ">
          <option value='' className="customOption">Ordenar por</option>
          <option value='apellidoAbogado' className="customOption">Abogado</option>
          <option value='apellidoCliente' className="customOption">Cliente</option>
        </select>
      
      </div>
    </div>
  );
}

export default OrderCasos;