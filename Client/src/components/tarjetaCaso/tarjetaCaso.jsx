import './tarjetaCaso.css'


function TarjetaCaso({caso}) {

  const { tipoCaso,
    nombreabogado, 
    apellidoAbogado,
    nombreCliente,
    apellidoCliente,
     } = caso;


   
    console.log('item', caso)
     

  return (
    
    <div className='tarjetaAbogado' >
      <h2>Tipo de caso: {tipoCaso}</h2>
      <h2>Abogado: {apellidoAbogado} {nombreabogado} </h2>
      <h2>Cliente: {apellidoCliente} {nombreCliente} </h2> 
      </div>
      
  )
}


export default TarjetaCaso