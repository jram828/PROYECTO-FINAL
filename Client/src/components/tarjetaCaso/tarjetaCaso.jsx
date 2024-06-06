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
    
  <div className="w-64 mx-auto bg-secondary text-black shadow-md rounded-lg overflow-hidden h-64">
    <div className="avatar flex justify-center mt-4">
      <img src={picture} alt="Profile Picture" className="rounded-full !w-28 !h-28 border-2 border-secondary" />
    </div>
    <div className="p-4 flex flex-col items-center">
    <Link to={`/home/cases/${id}`}>
      <h2 className="text-lg text-center font-semibold truncate">
        <span className="font-bold">Tipo de caso: </span>
        <span className="text-lg">{tipoCaso}</span>
      </h2>
      <h2 className="text-lg text-center font-semibold truncate">
        <span className="font-bold">Abogado: </span>
        <span className="text-lg">{apellidoAbogado} {nombreabogado}</span>
      </h2>
      <h2 className="text-lg text-center font-semibold truncate">
        <span className="font-bold">Cliente: </span>
        <span className="text-lg">{apellidoCliente} {nombreCliente}</span>
      </h2>
      </Link>
    </div>
  </div>

  )
}


export default TarjetaCaso