import style from './cases.module.css';
import React from 'react';
import Filtros from '../../components/filtros';
import Order from '../../components/order';
import { Link } from 'react-router-dom';

function Cases() {
  return (
    <div className={style.container}>
      
      <div className={style.container2}>
        <div className={style.ordercontainer}>
          <Order></Order>
        </div>
        <div className={style.filtroscontainer}>
          <Filtros></Filtros>
        </div>
      </div>
        <Link to='/home'>
        <button className='button'>Volver</button>
        </Link>
        <Link to='/home/cases/crearcaso'><button className='button'>Crear caso</button></Link>
    </div>
  )
}

export default Cases