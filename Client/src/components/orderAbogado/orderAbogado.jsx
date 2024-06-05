import React from "react";
import './orderAbogado.css'

function OrderAbogado({ onOrderChange }) {
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
      <option value="asc" >A-Z</option>
      <option value="desc" className="text-black">Z-A</option>
    </select>
  </div>
</div>
  );
}

export default OrderAbogado;