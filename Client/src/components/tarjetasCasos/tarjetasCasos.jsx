import './tarjetasCasos.css';
import TarjetaCaso from '../tarjetaCaso/tarjetaCaso';

function TarjetasCasos({ casos }) {
  if (!casos) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-4">
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