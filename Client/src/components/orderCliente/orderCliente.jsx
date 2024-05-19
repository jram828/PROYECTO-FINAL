import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderClientes } from "../../redux/actions";
import './orderCliente'

function OrderClientes() {
  const dispatch = useDispatch();
  
  function handleOrder(event) {
    event.preventDefault();
    dispatch(orderClientes(event.target.value));
  }

  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value=''>Ordenar:</option>
          <option value='asc'>A-Z</option>
          <option value='desc'>Z-A</option>
        </select>

        
        {/*<button onClick={handleOrder}>Ordenar A-Z</button>*/}
      </div>
      
    </div>
  );
}

export default OrderClientes;