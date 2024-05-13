import './customers.module.css';
import React from 'react';
import { Link  } from 'react-router-dom';
import Cards from '../../components/cards';
import { useState, useEffect } from 'react';
import { getClientes } from '../../handlers/todosClientes'


function CustomersPage() {
    const [clientes, setClientes] = useState([]);
    const [mostrarClientes, setMostrarClientes] = useState(false);
  
    useEffect(() => {
      
      const obtenerClientes = async () => {
        try {
          const listaClientes = await getClientes(); 
          setClientes(listaClientes);
        } catch (error) {
          console.error('Error al obtener los clientes:', error);
        }
      };
  obtenerClientes()
      
    }, []);

    const handleMostrarClientes = () => {
        setMostrarClientes(true);
        
      };

  return (
    <div>
        <p>clientes</p>
        <Link to="/home/customers/crearcliente">
          <button>Crear cliente</button>
        </Link>
        <Link to="/home">
          <button>Volver</button>
        </Link>
       
        <br></br>
        <br></br>
        <select>
        <option name="">Filtrar por Nombre</option>
        <option></option>
        </select>
        <select>
        <option name="">Filtrar por Pais</option>
        <option></option>
        </select>
        <select>
        <option name="">Filtrar por tipo de caso</option>
        <option></option>
        </select>
        <br></br>
        <br></br>
        <button onClick={handleMostrarClientes}>Ver todos</button>
        <div>
          {mostrarClientes && <Cards items={clientes} />}
          </div>
      <div>
      
     
    </div>
    </div>
    
  )
}

export default CustomersPage