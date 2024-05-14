import style from'./customers.module.css';
import React from 'react';
import { Link  } from 'react-router-dom';
import SearchBar from '../../components/searchBarClientes';
import FiltrosClientes from '../../components/filtrosClientes';



function CustomersPage() {
  

  return (
    <div className={style.container}>
        <p classname={style.titulo}>clientes</p>
        <Link to="/home/customers/crearcliente">
          <button className='button'>Crear cliente</button>
        </Link>
        <Link to="/home">
          <button className='button'>Volver</button>
        </Link>
       
        <SearchBar></SearchBar>
        <FiltrosClientes></FiltrosClientes>
        
    </div>
      
     
   
    
    
  )
}

export default CustomersPage