import './lawyers.module.css';
import React, {useEffect,useState} from 'react';
import { getAbogados } from '../../handlers/todosAbogados';

function Lawyers() {

  const addLawyer = userStoreLawyers((state) => state.addLawyer);
  const [abogados, setAbogados] = useState([]);

  useEffect(() => {
    
    const obtenerAbogados = async () => {
      try {
        const listaAbogados = await getAbogados(); 
        setAbogados(listaAbogados);
        addLawyer(listaAbogados) 
      } catch (error) {
        console.error('Error al obtener los abogados:', error);
      }
    };

    obtenerAbogados(); 
  }, []);
  return (
    <select >
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






  
