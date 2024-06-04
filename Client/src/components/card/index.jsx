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
    nombre, imagen
     } = item;

     const dispatch = useDispatch()

  /*const handlerDetalle = () => {
    window.localStorage.setItem("source", "detailCliente")
    window.localStorage.setItem("currentDetail", JSON.stringify(item))
  }*/

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
    
    <div className="w-64 mx-auto bg-secondary text-black shadow-lg rounded-lg overflow-hidden h-64">
      <div className="avatar flex justify-center mt-4">
        <img src={imagen} alt="Profile Picture" className="rounded-full !w-28 !h-28" />
      </div>
      <div className="p-4 flex flex-col items-center">
      <Link  to={`/home/detail/${cedula}`} className='hover:text-black'>
      <h2 className="text-lg text-center font-semibold truncate">
        <span className="font-bold">Apellido: </span> 
        <span className="text-lg">{apellido}</span>
      </h2>
      <h2 className="text-lg text-center font-semibold truncate">
        <span className="font-bold">Nombre: </span> 
        <span className="text-lg">{nombre}</span>
      </h2>
    <h2 className="text-lg text-center font-semibold truncate">
      <span className="font-bold">Cédula: </span> 
      <span className="text-lg">{cedulaAbogado ? cedulaAbogado : cedulaCliente}</span>
    </h2>
    </Link>
  </div>
    </div>
     
  )
}


export default Card