import './cases.css';
import React from 'react'
import { Link } from 'react-router-dom';
import FiltrosCasos from '../../components/filtrosCasos/filtrosCasos';

function Cases() {
  return (
    <div>
      <div>
        <p>Casos</p>
        
       
      </div>
      <Link to='/home/cases/crearcaso'>
          <button >Crear caso</button>
        </Link>
        <FiltrosCasos></FiltrosCasos>
      <Link to='/home'>
          <button >Volver</button>
        </Link>
    </div>
  )
}

export default Cases