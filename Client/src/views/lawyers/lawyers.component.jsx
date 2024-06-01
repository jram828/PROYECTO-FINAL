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
        
       <FiltrosAbogados></FiltrosAbogados>
       

    </div>
  </Layout>
  )
}


export default LawyersPage