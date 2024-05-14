import './filtrosClientes.css';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../cards/index';
import { useEffect } from 'react';
import { getClientes } from '../../redux/actions';
//import { Link } from 'react-router-dom';

function FiltrosClientes() {

  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);



  useEffect(() => {
    dispatch(getClientes())
  },[dispatch])

 
  return (
    
      <div>
        <div>
          <Cards items={clientes}></Cards>
  </div>
      </div>
  )
}

export default FiltrosClientes