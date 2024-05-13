import './cases.css';
import React from 'react';
import Filtros from '../../components/filtros';
import Order from '../../components/order';
import { Link } from 'react-router-dom';

function Cases() {
  return (
    <div>
      <div>
        <p>Casos</p>
        <Order></Order>
       <Filtros></Filtros>
      </div>
      <Link to='/home'>
          <button >Volver</button>
          </Link>
    </div>
  )
}

export default Cases