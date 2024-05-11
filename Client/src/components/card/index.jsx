import './card.css'



function Card({caso}) {
    const { id, tipo, cedula_cliente, cedula_abogado, fecha, descripción } = caso;

  return (
    <div>
        <h1>Caso:{id}</h1>
    <div>
       <h2>Tipo de caso: {tipo}</h2>
       <h2>Cliente: {cedula_cliente}</h2>
       <h2>Abogado: {cedula_abogado}</h2>
       <h2>Fecha: {fecha}</h2>
       <h2>Descripción: {descripción}</h2>
      </div>
    </div>
  )
}

export default Card