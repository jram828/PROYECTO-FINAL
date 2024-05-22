import './tarjetaCaso.css'
import { Link } from 'react-router-dom';
import picture from "../../assets/case-file.png"


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
      <div className="card max-w-md bg-primary shadow-xl text-white" >
        <div className="avatar">
          <div className="rounded">
          <img src={picture} alt="Profile Picture" className="rounded-xl " />
          </div>
        </div>

        <h2 className="card-title hover:text-secondary text-base m-2">Tipo de caso: {tipoCaso}</h2>
        <h2 className="card-title hover:text-secondary text-base m-2">Abogado: {apellidoAbogado} {nombreabogado} </h2>
        <h2 className="card-title hover:text-secondary text-base m-2">Cliente: {apellidoCliente} {nombreCliente} </h2> 
      </div>
    </Link>
  )
}


export default TarjetaCaso