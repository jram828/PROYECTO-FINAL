import style from './home.module.css';
import { Link,  } from 'react-router-dom';
import picture from "../../assets/homepic.jpg";
import logo from '../../assets/logo.png'
import legaltech from "../../assets/legaltech.png";
import { useDispatch } from 'react-redux';
import { setSource } from '../../redux/actions';
import { useEffect } from 'react';


function Home() {

  const dispatch = useDispatch()
  
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  console.log("Rol usuario: ", user.rol);
  console.log('User local storage: ', user)
  const handleSalir = () => {
    window.localStorage.setItem("loggedUser", JSON.stringify({}));
    
  }

  const handlerSubmitD = () => {
   
      dispatch(setSource("abogado"));

  }
  

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
          <img src={picture} alt="homeLawyers" className="h-auto" />
        </div>
        <ul
          className={`menu bg-primary w-full text-white rounded-box menu-lg ${style["menu-container"]}`}
        >
          <li>
            {user.administrador===true || user.cedulaAbogado ? (
              <Link
                to="/home/customers"
                className="text-white hover:text-white hover:bg-accent"
              >
                <button>Clientes</button>
              </Link>
            ) : undefined}
          </li>
          <li>
            {user.administrador===true ? (
              <Link
                to="/home/lawyers"
                className="text-white hover:text-white hover:bg-accent"
              >
                <button>Abogados</button>
              </Link>
            ) : undefined}
          </li>
          <li>
            <Link
              to="/home/detail"
              className="text-white hover:text-white hover:bg-accent"
            >
              <button>Datos Personales</button>
            </Link>
          </li>
          <li>
            {user.administrador===true || user.cedulaAbogado ? (
              <Link
                to="/home/cases"
                className="text-white hover:text-white hover:bg-accent"
              >
                <button>Casos</button>
              </Link>
            ) : undefined}
          </li>
          <li>
            <Link
              to="/home/documents"
              className="text-white hover:text-white hover:bg-accent"
            >
              <button>Documentos</button>
            </Link>
          </li>
          <li>
            {/* {user.rol === "Administrador" ? ( */}
            <Link
              to="/home/diary"
              className="text-white hover:text-white hover:bg-accent"
            >
              <button>Agenda</button>
            </Link>
            {/* ) : undefined} */}
          </li>
          <li>
            {user.administrador===true || user.cedulaCliente ? (
              <Link
                to="/home/payments"
                className="text-white hover:text-white hover:bg-accent"
              >
                <button>Pagos</button>
              </Link>
            ) : undefined}
          </li>
          {/* <li>
            <Link
              to="/home/consultation"
              className="text-white hover:text-white hover:bg-accent"
            >
              <button>Consultas</button>
            </Link>
          </li> */}
          <li>
            {user.administrador ===true? (
              <Link
                to="/home/statistics"
                className="text-white hover:text-white hover:bg-accent"
              >
                <button>Estadisticas</button>
              </Link>
            ) : undefined}
          </li>
          <li>
            <Link
              to="/"
              className="text-white hover:text-white hover:bg-accent"
            >
              <button onClick={handleSalir}>Salir</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Home
