import './home.module.css';
import { Link,  } from 'react-router-dom';
import Lawyers from '../../components/lawyers/lawyers.components';
import Costumers from '../../components/costumers/costumers.component';

function Home() {
  
  return (
    <div>
     
    <Costumers></Costumers>
    <Lawyers></Lawyers>
    
    <br></br>
       <Link to="/home/crearcliente">
          <button>Crear cliente</button>
        </Link>
        <Link to="/home/crearabogado">
          <button>Craer abogado</button>
        </Link>
    
    <br></br>
      <Link to="/home/detail">
        <button>Datos Personales</button>
      </Link>
      <Link to="/home/cases/:id">
        <button>Casos</button>
      </Link>
      <Link to="/home/documents/:id">
        <button>Documentos</button>
      </Link>
      <Link to="/home/diary">
        <button>Agenda</button>
      </Link>
      <br></br>
      <Link to="/home/payments">
        <button>Pagos</button>
      </Link>
      <Link to="/home/consultation">
        <button>Consultas</button>
      </Link>
      <Link to="/home/statistics">
        <button>Estadisticas</button>
      </Link>
      <br/>
      <br/>
      <Link to="/">
        <button>Salir</button>
      </Link>

    </div>
  );
}


export default Home