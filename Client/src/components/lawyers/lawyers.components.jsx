import style from './lawyers.module.css';
import {useEffect,useState} from 'react';

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
    <select className={style.select}>
      <option value="" className={style.option}>Abogados</option>
      {abogados.map(abogado => (
        <option key={abogado.cedulaAbogado} value={abogado.cedulaAbogado} className={style.option}>
          {abogado.nombre} {abogado.apellido}
        </option>
      ))}
      
    </select>
  )
}

export default Lawyers






  
