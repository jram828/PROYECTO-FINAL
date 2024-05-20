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
      <Link to='/home'>
          <button >Volver</button>
        </Link>
    
    
      <FiltrosCasos></FiltrosCasos>
    
    </div>
  )
}

export default Cases