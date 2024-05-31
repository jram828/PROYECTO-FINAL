import style from './home.module.css';
import { Link,  } from 'react-router-dom';
import picture from "../../assets/homepic.jpg";
import logo from '../../assets/logo.png'
import legaltech from "../../assets/legaltech.png";
import Layout from '../../components/layout/layout';


function Home() {
 
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  console.log("Rol usuario: ", user.rol);
  console.log('User local storage: ', user)
  const handleSalir = () => {
    window.localStorage.setItem("loggedUser", JSON.stringify({}));
    
  }

  return (
  <Layout>
    <div>
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen">
    <div className="hidden lg:flex justify-center items-center lg:w-3/4" style={{ height: "75vh" }}>
      <img src={picture} alt="homeLawyers" className="h-auto max-h-full rounded-md" />
    </div>

    <div className="flex justify-center items-center lg:w-1/4">
      <ul className="menu bg-primary text-white rounded-md menu-lg w-full h-full flex flex-col justify-around items-center" style={{ height: "75vh", width: "35vh" }}>
            <li>
              {user.administrador === true || user.cedulaAbogado ? (
                <Link
                  to="/home/customers"
                  className="flex items-center justify-center text-white hover:text-white hover:bg-accent h-full"
                >
                  <button>Clientes</button>
                </Link>
              ) : undefined}
            </li>
            <li>
              {user.administrador === true ? (
                <Link
                  to="/home/lawyers"
                  className="flex items-center justify-center text-white hover:text-white hover:bg-accent h-full"
                >
                  <button>Abogados</button>
                </Link>
              ) : undefined}
            </li>
            <li>
              <Link
                to="/home/detail"
                className="flex items-center justify-center text-white hover:text-white hover:bg-accent h-full"
              >
                <button>Datos Personales</button>
              </Link>
            </li>
            <li>
              {user.administrador === true || user.cedulaAbogado ? (
                <Link
                  to="/home/cases"
                  className="flex items-center justify-center text-white hover:text-white hover:bg-accent h-full"
                >
                  <button>Casos</button>
                </Link>
              ) : undefined}
            </li>
            <li>
              <Link
                to="/home/documents"
                className="flex items-center justify-center text-white hover:text-white hover:bg-accent h-full"
              >
                <button>Documentos</button>
              </Link>
            </li>
            <li>
              <Link
                to="/home/diary"
                className="flex items-center justify-center text-white hover:text-white hover:bg-accent h-full"
              >
                <button>Agenda</button>
              </Link>
            </li>
            <li>
              {user.administrador === true || user.cedulaCliente ? (
                <Link
                  to="/home/payments"
                  className="flex items-center justify-center text-white hover:text-white hover:bg-accent h-full"
                >
                  <button>Pagos</button>
                </Link>
              ) : undefined}
            </li>
            <li>
              {user.administrador === true ? (
                <Link
                  to="/home/statistics"
                  className="flex items-center justify-center text-white hover:text-white hover:bg-accent h-full"
                >
                  <button>Estadísticas</button>
                </Link>
              ) : undefined}
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center justify-center text-white hover:text-white hover:bg-accent h-full"
              >
                <button onClick={handleSalir}>Salir</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>

  );
}


export default Home
