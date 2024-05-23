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
      <div className="w-64 mx-auto bg-primary text-white shadow-lg rounded-lg overflow-hidden h-64">
        <div className="avatar flex justify-center m-4">
          
          <img src={picture} alt="Profile Picture" className="rounded-full border-2 border-secondary !w-24 !h-24" />
          
        </div>

        <h2 className="text-xl font-semibold truncate">Tipo de caso: {tipoCaso}</h2>
        <h2 className="text-xl font-semibold truncate">Abogado: {apellidoAbogado} {nombreabogado} </h2>
        <h2 className="text-xl font-semibold truncate">Cliente: {apellidoCliente} {nombreCliente} </h2> 
      </div>
    </Link>
  )
}


export default TarjetaCaso