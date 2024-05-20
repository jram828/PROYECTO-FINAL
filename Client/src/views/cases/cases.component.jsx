import './cases.css';
import React from 'react'
import { Link } from 'react-router-dom';
import FiltrosCasos from '../../components/filtrosCasos/filtrosCasos';
import OrderCasos from '../../components/orderCasos/orderCasos';

function Cases() {
  return (
    <div>
        <p>Casos</p>
      
        <Link to='/home/cases/crearcaso'>
          <button >Crear caso</button>
        </Link>
        <Link to='/home'>
          <button >Volver</button>
        </Link>
        <OrderCasos></OrderCasos> 
        <FiltrosCasos></FiltrosCasos>
      </div>
    
  )
}

export default Cases