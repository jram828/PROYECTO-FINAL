import './home.css';
import { Link,  } from 'react-router-dom';
import Lawyers from '../../components/lawyers/lawyers.components';
import Costumers from '../../components/costumers/costumers.component';
import picture from './homepic.jpg'
import logo from './logo.png'

function Home() {
  
  return (
    <div>

    <div className='container'>
      <img src={logo} alt='logo'/>
      <div className='container1'>
        {/*<Costumers></Costumers>
        <Lawyers></Lawyers>*/}
      </div>
    </div>
       
    <br></br>
    <div className='container2'>
      <div className='imagen'>
        <img src={picture} alt="homeLawyers" />
      </div>
      <div className='container3'>
        <Link to="/home/customers">
          <button className='btn2'>Clientes</button>
        </Link>
        <Link to="/home/lawyers">
          <button className='btn2'>Abogados</button>
        </Link>
        <br></br>
        <Link to="/home/detail">
          <button className='btn'>Datos Personales</button>
        </Link>
        <Link to="/home/cases/:id">
          <button className='btn'>Casos</button>
        </Link>
        <Link to="/home/documents/:id">
          <button className='btn'>Documentos</button>
        </Link>
        <Link to="/home/diary">
          <button className='btn'>Agenda</button>
        </Link>
        <Link to="/home/payments">
          <button className='btn'>Pagos</button>
        </Link>
        <Link to="/home/consultation">
          <button className='btn'>Consultas</button>
        </Link>
        <Link to="/home/statistics">
          <button className='btn'>Estadisticas</button>
        </Link>

        <br/>
        <br/>
        <Link to="/">
        <button className='btn3'>Salir</button>
        </Link>
      </div>
    </div>
    </div>
  );
}


export default Home