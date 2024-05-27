import style from './lawyers.module.css';
import React from 'react';
// import { Link,  } from 'react-router-dom';
import FiltrosAbogados from '../../components/filtrosAbogados';
// import OrderAbogados from '../../components/orderAbogado/orderAbogado.jsx';
import Layout from '../../components/layout/layout';

function LawyersPage() {


  return (
  <Layout>
    <div className={style.container}>
        {/* <p className={style.titulo}>Abogados</p> */}
        {/* <Link to="/home/lawyers/crearabogado">
          <button className='button'>Crear abogado</button>
        </Link> */}
        {/* <Link to="/home">
          <button className='button'>Volver</button>
        </Link> */}
        {/* <OrderAbogados></OrderAbogados> */}
       <FiltrosAbogados></FiltrosAbogados>
       

    </div>
  </Layout>
  )
}


export default LawyersPage