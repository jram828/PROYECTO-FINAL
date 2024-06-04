import React from "react";
import { useDispatch } from "react-redux";
import { orderAbogados } from "../../redux/actions";
import './orderAbogado.css'

function OrderAbogado() {
  const dispatch = useDispatch();
  
  function handleOrder(event) {
    event.preventDefault();
    dispatch(orderAbogados(event.target.value));
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
      <option value="asc" className="text-black">A-Z</option>
      <option value="desc" className="text-black">Z-A</option>
    </select>
  </div>
</div>
  );
}

export default OrderAbogado;