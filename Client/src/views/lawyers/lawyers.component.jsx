import style from './lawyers.module.css';
import React from 'react';
import { Link,  } from 'react-router-dom';
import FiltrosAbogados from '../../components/filtrosAbogados';
import SearchBar from '../../components/searchBarAbogado';


function LawyersPage() {


  return (
    <div className={style.container}>
        <p className={style.titulo}>Abogados</p>
        <Link to="/home/lawyers/crearabogado">
          <button className='button'>Crear abogado</button>
        </Link>
        <Link to="/home">
          <button className='button'>Volver</button>
        </Link>
       <FiltrosAbogados></FiltrosAbogados>
    </div>
  )
}


export default LawyersPage