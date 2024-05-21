import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderClientes } from "../../redux/actions";
import './orderCliente.css'

function OrderClientes() {
  const dispatch = useDispatch();
  
  function handleOrder(event) {
    event.preventDefault();
    dispatch(orderClientes(event.target.value));
  }

  return (
    <div>
      <div>
        <select onChange={handleOrder} className="input select-bordered flex items-center text-lg pl-2 custom-select ">
          <option value='' className="customOption">Ordenar ​</option>
          <option value='asc' className="customOption">A-Z</option>
          <option value='desc' className="customOption">Z-A</option>
        </select>
        {/*<button onClick={handleOrder}>Ordenar A-Z</button>*/}
      </div>
      <br />
    </div>
  );
}

export default OrderClientes;