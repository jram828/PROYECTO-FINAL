import './lawyers.module.css';
import React from 'react';
import { Link,  } from 'react-router-dom';
import FiltrosAbogados from '../../components/filtrosAbogados';
import SearchBar from '../../components/searchBarAbogado';


function LawyersPage() {


  return (
    <div>
        <p>Abogados</p>
        <Link to="/home/lawyers/crearabogado">
          <button>Craer abogado</button>
        </Link>
        <Link to="/home">
          <button>Volver</button>
        </Link>
        <SearchBar></SearchBar>
        
       <FiltrosAbogados></FiltrosAbogados>
    </div>
  )
}


export default LawyersPage