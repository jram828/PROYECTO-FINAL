import './filtrosAbogados.css';
import { useEffect } from 'react';
import Cards from '../cards';
import { useSelector, useDispatch } from 'react-redux';
import { getAbogados } from '../../redux/actions'

function FiltrosAbogados() {

  const dispatch = useDispatch();
  const abogados = useSelector((state) => state.abogados);



  useEffect(() => {
    dispatch(getAbogados())
  },[dispatch])



 

 
  return (
    
      <div>
        {/*<label>Buscar</label>
        <input></input>
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
          <button onClick={handleMostrarAbogados}>Ver Todos</button>*/}
          <div>
          <Cards items={abogados}></Cards>
  </div>
      </div>
  )
}

export default FiltrosAbogados


