import './tarjetasCasos.css';
import TarjetaCaso from '../tarjetaCaso/tarjetaCaso';


function TrajetasCasos({ casos }) {

  if (!casos || !casos.datosPagina) {
    return null;
  }
console.log('tarjetas', casos)
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