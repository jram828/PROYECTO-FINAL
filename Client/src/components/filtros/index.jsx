import './filtros.css';
import React from 'react';
import Cards from '../cards/index';
import { useState } from 'react';

function Filtros() {

  const [mostrarCasos, setMostrarCasos] = useState(false);

  /*const [filtros, setFiltros] = useState({
    "tipo": "", 
     "cedula_cliente": "", 
     "cedula_abogado": "", 
     "cotización": "",
     "estado": "" 
  });*/

  const casos = [
    { 
    "id": 1, 
    "tipo": "moratoria", 
     "cedula_cliente": 36352487, 
     "cedula_abogado": 53427165, 
     "cotización": 200.000,
     "fecha": "15-3-23", 
     "descripción": "detalle de este caso......",
     "estado": "en proceso" 
    },
    { "id": 2, 
    "tipo": "sucesión", 
     "cedula_cliente": 36387287, 
     "cedula_abogado": 16127165, 
     "cotización": 500.000,
     "fecha": "10-8-20", 
     "descripción": "detalle de este caso......", 
     "estado": "finalizado"
    },
    { "id": 3, 
    "tipo": "divorcio", 
     "cedula_cliente": 10982487, 
     "cedula_abogado": 15147165, 
     "cotización": 300.000,
     "fecha": "05-2-24", 
     "descripción": "detalle de este caso......",
     "estado": "en proceso" 
    }
]

/*console.log("filtros:", filtros)
  const casosFiltrados = casos.filter((caso) => {
    const resultado = (
      (filtros.cedula_cliente === "" || caso.cedula_cliente.toString() === filtros.cedula_cliente) &&
      (filtros.cotización === "" || caso.cotización == filtros.cotización) &&
      (filtros.cedula_abogado === "" || caso.cedula_abogado == filtros.cedula_abogado) &&
      (filtros.estado === "" || caso.estado === filtros.estado) &&
      (filtros.tipo === "" || caso.tipo === filtros.tipo)
    );
    console.log("casos:", casos, "resultado:", resultado);
    return resultado
  });

  console.log("casos filtrados:", casosFiltrados)*/




  const handleMostrarCasos = () => {
    setMostrarCasos(true);
  };

  /*const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFiltros({ ...filtros, [name]: value });
    console.log(event)
  };

  console.log(event)*/

  return (
    <div>
      <div>
      <select>
<option name="">Casos por cliente</option>
{casos
    .filter((caso, index, self) => self.findIndex(c => c.cedula_cliente === caso.cedula_cliente) === index)
    .map((caso) => (
      <option key={caso.id} value={caso.cedula_cliente}>
        {caso.cedula_cliente}
        </option>
    ))}
</select>
<select>
<option name="">Casos por cotización</option>
{casos
    .filter((caso, index, self) => self.findIndex(c => c.cotización === caso.cotización) === index)
    .map((caso) => (
      <option key={caso.id} value={caso.cotización}>
        {caso.cotización}
        </option>
    ))}
    </select>
<select>
<option name="">Casos por abogado</option>
{casos
    .filter((caso, index, self) => self.findIndex(c => c.cedula_abogado === caso.cedula_abogado) === index)
    .map((caso) => (
      <option key={caso.id} value={caso.cedula_abogado}>
        {caso.cedula_abogado}
        </option>
    ))}
</select>
<br></br>
<select>
<option name="">Casos por estado</option>
{casos
    .filter((caso, index, self) => self.findIndex(c => c.estado === caso.estado) === index)
    .map((caso) => (
      <option key={caso.id} value={caso.estado}>
        {caso.estado}
        </option>
    ))}
</select>
<select>
<option name="">Casos por tipo</option>
{casos
    .filter((caso, index, self) => self.findIndex(c => c.tipo === caso.tipo) === index)
    .map((caso) => (
      <option key={caso.id} value={caso.tipo}>
        {caso.tipo}
        </option>
    ))}
</select>
<br></br>
<button onClick={handleMostrarCasos}>Todos los casos</button>
      </div>
      {mostrarCasos && <Cards casos={handleMostrarCasos} />}
    </div>
  )
}

export default Filtros


