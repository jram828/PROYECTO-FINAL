import style from'./customers.module.css';
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
    <div className={style.container}>
        <p classname={style.titulo}>clientes</p>
        <Link to="/home/customers/crearcliente">
          <button className='button'>Crear cliente</button>
        </Link>
        <Link to="/home">
          <button className='button'>Volver</button>
        </Link>
       
        <br></br>
        <br></br>
        <div className={style.container2}>
          <select className={style.select}>
          <option name="" className={style.option}>Filtrar por Nombre</option>
          <option className={style.option}></option>
          </select>
          <select className={style.select}>
          <option name="" className={style.option}>Filtrar por Pais</option>
          <option className={style.option}></option>
          </select>
          <select className={style.select}>
          <option name="" className={style.option}>Filtrar por tipo de caso</option>
          <option className={style.option}></option>
          </select>
        </div>
        
        <br></br>
        <br></br>
        <button onClick={handleMostrarClientes} className='button'>Ver todos</button>
        <div>
          {mostrarClientes && <Cards items={clientes} />}
          </div>
      <div>
      
     
    </div>
    </div>
    
  )
}

export default CustomersPage