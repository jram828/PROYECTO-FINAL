import './cases.css';
import React from 'react';


import { Link } from 'react-router-dom';

function Cases() {
  return (
    <div>
      <div>
        <p>Casos</p>
       
      </div>
      <Link to='/home'>
          <button >Volver</button>
          </Link>
    </div>
  )
}

export default Cases