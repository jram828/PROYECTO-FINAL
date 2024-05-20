import './tarjetaCaso.css'
import { Link } from 'react-router-dom';


function TarjetaCaso({caso}) {

  const { 
    id,
    tipoCaso,
    nombreabogado, 
    apellidoAbogado,
    nombreCliente,
    apellidoCliente,
     } = caso;


   
    console.log('item', caso)
     

  return (
    <Link  to={`/home/cases/${id}`}>
    <div className='tarjetaAbogado' >
      <h2>Tipo de caso: {tipoCaso}</h2>
      <h2>Abogado: {apellidoAbogado} {nombreabogado} </h2>
      <h2>Cliente: {apellidoCliente} {nombreCliente} </h2> 
      </div>
      </Link>
  )
}


export default TarjetaCaso