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
    
    <div className="w-64 mx-auto bg-primary text-white shadow-lg rounded-lg overflow-hidden h-64">
      <div className="avatar flex justify-center m-4">
        <img src={picture} alt="Profile Picture" className="rounded-full border-2 border-secondary !w-24 !h-24" />
      </div>
      <div className="p-4">
      <Link  to={`/home/detail/${cedula}`} className='hover:text-white'>
        <h2 className="text-xl font-semibold truncate">Apellido: {apellido}</h2>
        <h2 className="text-xl font-semibold truncate">Nombre: {nombre}</h2>
      </Link>
        <h2 className="text-xl font-semibold truncate">Cédula: {cedulaAbogado ? cedulaAbogado : cedulaCliente}</h2>
      </div>
    </div>
     
  )
}


export default Card