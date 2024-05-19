import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderClientes } from "../../redux/actions";
import './orderCliente'

function OrderClientes() {
  const dispatch = useDispatch();
  
  function handleOrder(event) {
    event.preventDefault();
    dispatch(orderClientes());
  }

  return (
    <div>
      <div>
        <button onClick={handleOrder} className="button">Ordenar A-Z</button>
      </div>
      <div>
      </div>
    </div>
  );
}

export default OrderClientes;