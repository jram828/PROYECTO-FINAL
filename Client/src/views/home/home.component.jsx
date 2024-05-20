import style from './home.module.css';
import { Link,  } from 'react-router-dom';
import picture from "../../assets/homepic.jpg";
import logo from '../../assets/logo.png'
import legaltech from "../../assets/legaltech.png";

function Home() {
  
  return (
    <div>
      {/* <div className={style.container}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
          <img src={legaltech} alt="legaltech" />
        </div>
        <br></br>
      </div> */}

      <div className={style.container2}>
        <div className={style.imagen}>
          <img src={picture} alt="homeLawyers" />
        </div>
        <ul className="menu bg-accent text-white w-80 rounded-box menu-lg">
         <li>
          <Link to="/home/customers" className='hover:text-primary'>
            <button>Clientes</button>
          </Link>
        </li>
         <li>
          <Link to="/home/lawyers" className='hover:text-primary'>
              <button >Abogados</button>
          </Link>
         </li>
         <li>
          <Link to="/home/detail" className='hover:text-primary'>
            <button >Datos Personales</button>
          </Link>
         </li>
         <li>
          <Link to="/home/cases" className='hover:text-primary'>
            <button >Casos</button>
          </Link>
         </li>
         <li>
          <Link to="/home/documents" className='hover:text-primary'>
            <button >Documentos</button>
          </Link>
         </li>
         <li>
          <Link to="/home/diary" className='hover:text-primary'>
            <button >Agenda</button>
          </Link>
         </li>
         <li>
          <Link to="/home/payments" className='hover:text-primary'>
            <button >Pagos</button>
          </Link>
         </li>
         <li>
          <Link to="/home/consultation" className='hover:text-primary'>
            <button >Consultas</button>
          </Link>
         </li>
         <li>
          <Link to="/home/statistics" className='hover:text-primary'>
            <button >Estadisticas</button>
          </Link>
         </li>
         <li>
          <Link to="/" className='hover:text-primary'>
            <button >Salir</button>
          </Link>
         </li>
        </ul>
      </div>
    </div>
  );
}


export default Home
