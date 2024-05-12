import './lawyers.module.css';
import React, {useEffect,useState} from 'react';
import { getAbogados } from '../../handlers/todosAbogados';
import userStoreLawyers from '../../store/lawyers';

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
        <option key={abogado.id} value={abogado.id}>
          {abogado.nombre} {abogado.apellido}
        </option>
      ))}
      
    </select>
  )
}

export default Lawyers






  