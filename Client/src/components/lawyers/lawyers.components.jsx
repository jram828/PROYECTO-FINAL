import './lawyers.css';
import React, {useEffect,useState} from 'react';

import { getAbogados } from '../../handlers/todosAbogados';


function Lawyers() {

  const [abogados, setAbogados] = useState([]);
  //  const [detalle, setDetalle] = useState({});

  useEffect(() => {
    
    const obtenerAbogados = async () => {
      try {
        const listaAbogados = await getAbogados(); 
        setAbogados(listaAbogados);
      } catch (error) {
        console.error('Error al obtener los abogados:', error);
      }
    };

    obtenerAbogados(); 
  }, []);
  return (
    <select className='select'>
      <option value="">Abogados</option>
      {abogados.map(abogado => (
        <option key={abogado.cedulaAbogado} value={abogado.cedulaAbogado}>
          {abogado.nombre} {abogado.apellido}
        </option>
      ))}
      
    </select>
  )
}

export default Lawyers






  