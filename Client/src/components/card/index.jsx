import './card.css'
import { Link  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setSource } from '../../redux/actions';



function Card({item}) {

  const { cedulaAbogado,
    cedulaCliente, 
    apellido, 
    nombre
     } = item;

     const dispatch = useDispatch()


  if (cedulaAbogado) { useEffect(() => {
    dispatch(setSource('abogado'));
  }, [dispatch]); 
} else {
   useEffect(() => {
    dispatch(setSource('cliente'));
  }, [dispatch]);
  }




      const cedula = item.cedulaAbogado ? item.cedulaAbogado : item.cedulaCliente
      console.log('item', item)
      console.log('cedula', cedula);

  return (
    <Link  to={`/home/detail/${cedula}`}>
    <div className='tarjetaAbogado' >
      <h2>Nombre: {nombre}</h2>
      <h2>Apellido: {apellido}</h2>
      <h2>Cédula: {cedulaAbogado ? cedulaAbogado : cedulaCliente}</h2> 
      </div>
      </Link>
  )
}


export default Card