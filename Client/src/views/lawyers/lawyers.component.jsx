import style from './lawyers.module.css';
import React from 'react';
import { Link,  } from 'react-router-dom';
import Cards from '../../components/cards';
import { getAbogados } from '../../handlers/todosAbogados';
import { useState, useEffect } from 'react';


function LawyersPage() {

    
    const [abogados, setAbogados] = useState([]);
    const [mostrarAbogados, setMostrarAbogados] = useState(false);
  
    useEffect(() => {
      
      const obtenerAbogados = async () => {
        try {
          const listaAbogados = await getAbogados(); 
          setAbogados(listaAbogados);
        } catch (error) {
          console.error('Error al obtener los abogados:', error);
        }
      };
  obtenerAbogados()
      
    }, []);

    const handleMostrarAbogados = () => {
        setMostrarAbogados(true);
        
      };
    


  return (
    <div className={style.container}>
        <p className={style.titulo}>Abogados</p>
        <Link to="/home/lawyers/crearabogado">
          <button className='button'>Crear abogado</button>
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
          <button onClick={handleMostrarAbogados} className='button'>Ver Todos</button>
          <div>
          {mostrarAbogados && <Cards items={abogados} />}
          </div>
    </div>
  )
}

export default LawyersPage