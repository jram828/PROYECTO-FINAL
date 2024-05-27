import './tarjetasCasos.css';
import TarjetaCaso from '../tarjetaCaso/tarjetaCaso';


function TrajetasCasos({ casos }) {

  //const user = JSON.parse(localStorage.getItem("loggedUser"));
  

  if (!casos || !casos.datosPagina) {
    return null;
  }
console.log('tarjetas', casos)

/*let casosFiltrados;

if (user.administrador === true) {
  casosFiltrados = casos.datosPagina;
} else if (user.cedulaCliente) {
  casosFiltrados = casos.datosPagina.filter(caso =>
    caso.nombreCliente === user.nombre && caso.apellidoCliente === user.apellido
  );
} else if (user.cedulaAbogado) {
  casosFiltrados = casos.datosPagina.filter(caso =>
    caso.nombreabogado === user.nombre && caso.apellidoAbogado === user.apellido
  );
}*/

  return (
    <div className='contenedorcasos'>
      {casos.datosPagina.map(caso => (
        <TarjetaCaso
          caso={caso} 
          key={caso.id} 
        />
      ))}
    </div>
  );
}

export default TrajetasCasos;