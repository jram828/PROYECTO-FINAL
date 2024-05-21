import style from './home.module.css';
import { Link,  } from 'react-router-dom';
import picture from "../../assets/homepic.jpg";
import logo from '../../assets/logo.png'
import legaltech from "../../assets/legaltech.png";

function Home() {
  
  let userRol = localStorage.getItem("loggedUser");
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
        <ul className="menu bg-primary text-white w-80 rounded-box menu-md">
          <li>
            <Link
              to="/home/customers"
              className="hover:text-white hover:bg-accent"
            >
              <button>Clientes</button>
            </Link>
          </li>
          <li>
            {userRol === "Administrador" ? (
              <Link
                to="/home/lawyers"
                className="hover:text-white hover:bg-accent"
              >
                <button>Abogados</button>
              </Link>
            ) : undefined}
          </li>
          <li>
            <Link
              to="/home/detail"
              className="hover:text-white hover:bg-accent"
            >
              <button>Datos Personales</button>
            </Link>
          </li>
          <li>
            <Link to="/home/cases" className="hover:text-white hover:bg-accent">
              <button>Casos</button>
            </Link>
          </li>
          <li>
            <Link
              to="/home/documents"
              className="hover:text-white hover:bg-accent"
            >
              <button>Documentos</button>
            </Link>
          </li>
          <li>
            {userRol === "Administrador" ? (
              <Link
                to="/home/diary"
                className="hover:text-white hover:bg-accent"
              >
                <button>Agenda</button>
              </Link>
            ) : undefined}
          </li>
          <li>
            <Link
              to="/home/payments"
              className="hover:text-white hover:bg-accent"
            >
              <button>Pagos</button>
            </Link>
          </li>
          <li>
            <Link
              to="/home/consultation"
              className="hover:text-white hover:bg-accent"
            >
              <button>Consultas</button>
            </Link>
          </li>
          <li>
            {userRol === "Administrador" ? (
              <Link
                to="/home/statistics"
                className="hover:text-white hover:bg-accent"
              >
                <button>Estadisticas</button>
              </Link>
            ) : undefined}
          </li>
          <li>
            <Link to="/" className="hover:text-white hover:bg-accent">
              <button>Salir</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Home
