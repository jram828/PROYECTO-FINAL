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
      <select onChange={handleOrder} className="input select-bordered flex items-center text-lg pl-2 custom-select ">
          <option value='' className="customOption">Ordenar:</option>
          <option value='asc' className="customOption">A-Z</option>
          <option value='desc' className="customOption">Z-A</option>
        </select>
        
      
      </div>
    </div>
  );
}

export default OrderAbogado;