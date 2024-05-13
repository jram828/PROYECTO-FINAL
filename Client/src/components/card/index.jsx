import './card.css'
import { Link  } from 'react-router-dom';



function Card({item}) {
    const { cedulaAbogado,
      cedulaCliente, 
      apellido, 
      nombre
       } = item;

      const cedula = item.cedulaAbogado ? item.cedulaAbogado : item.cedulaCliente

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