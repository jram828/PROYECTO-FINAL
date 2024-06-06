import style from './lawyers.module.css';
import React from 'react';
// import { Link,  } from 'react-router-dom';
import FiltrosAbogados from '../../components/filtrosAbogados';
// import OrderAbogados from '../../components/orderAbogado/orderAbogado.jsx';


function LawyersPage() {


  return (
  
    <div className={style.container}>
        
       <FiltrosAbogados></FiltrosAbogados>
       

    </div>
  
  )
}


export default LawyersPage