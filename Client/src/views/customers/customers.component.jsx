import './customers.module.css';
import React from 'react';
import { Link  } from 'react-router-dom';
import SearchBar from '../../components/searchBarClientes';
import FiltrosClientes from '../../components/filtrosClientes';



function CustomersPage() {
  

  return (
    <div>
        <p>clientes</p>
        <Link to="/home/customers/crearcliente">
          <button>Crear cliente</button>
        </Link>
        <Link to="/home">
          <button>Volver</button>
        </Link>
       
        <SearchBar></SearchBar>
        <FiltrosClientes></FiltrosClientes>
        
    </div>
      
     
   
    
    
  )
}

export default CustomersPage