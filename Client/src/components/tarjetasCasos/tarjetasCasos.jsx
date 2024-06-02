import './tarjetasCasos.css';
import TarjetaCaso from '../tarjetaCaso/tarjetaCaso';

function TarjetasCasos({ casos }) {
  if (!casos) {
    return null;
  }

  return (
    <div className='contenedorcasos'>
      {casos.map(caso => (
        <TarjetaCaso
          caso={caso} 
          key={caso.id} 
        />
      ))}
    </div>
  );
}

export default TarjetasCasos;