import './lawyers.module.css';
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
    <div>
        <p>Abogados</p>
        <Link to="/home/lawyers/crearabogado">
          <button>Craer abogado</button>
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
          <button onClick={handleMostrarAbogados}>Ver Todos</button>
          <div>
          {mostrarAbogados && <Cards items={abogados} />}
          </div>
    </div>
  )
}

export default LawyersPage