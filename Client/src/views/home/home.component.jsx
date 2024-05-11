import './home.module.css';
import React from 'react';
import { Link,  } from 'react-router-dom';

function Home() {
  
  return (
    <div>
      <select >
      <option value="">Clientes</option>
      <option value="1">Cliente 1</option>
      <option value="2">Cliente 2</option>
      <option value="3">Cliente 3</option>
      
    </select>
    <select >
      <option value="">Abogados</option>
      <option value="1">Abogado 1</option>
      <option value="2">Abogado 2</option>
      <option value="3">Abogado 3</option>
      
    </select>
    <br></br>
       <Link to="/home/crearcliente">
          <button>Crear cliente</button>
        </Link>
        <Link to="/home/crearabogado">
          <button>Craer abogado</button>
        </Link>
    
    <br></br>
      <Link to="/home/detail">
        <button>Datos Personales</button>
      </Link>
      <Link to="/home/cases/:id">
        <button>Casos</button>
      </Link>
      <Link to="/home/documents/:id">
        <button>Documentos</button>
      </Link>
      <Link to="/home/diary">
        <button>Agenda</button>
      </Link>
      <br></br>
      <Link to="/home/payments">
        <button>Pagos</button>
      </Link>
      <Link to="/home/consultation">
        <button>Consultas</button>
      </Link>
      <Link to="/home/statistics">
        <button>Estadisticas</button>
      </Link>
      <br/>
      <br/>
      <Link to="/">
        <button>Salir</button>
      </Link>

    </div>
  );
};


export default Home