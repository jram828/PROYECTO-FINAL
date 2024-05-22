import './card.css'
import picture from "../../assets/profile-orange.png"
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
    <div className="card max-w-md bg-primary shadow-xl text-white" >
      <div className="avatar">
        <div className="rounded">
        <img src={picture} alt="Profile Picture" className="rounded-xl " />
        </div>
      </div>
  
      <h2 className="card-title hover:text-secondary m-2">Apellido: {apellido}</h2>
      <h2 className="card-title hover:text-secondary m-2">Nombre: {nombre}</h2>
      <h2 className="card-title hover:text-secondary m-2">Cédula: {cedulaAbogado ? cedulaAbogado : cedulaCliente}</h2> 
      </div>
      </Link>
  )
}


export default Card