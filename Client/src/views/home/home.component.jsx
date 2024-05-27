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

          <div className="hidden lg:flex lg:justify-center lg:items-center lg:w-2/3" style={{ height: "75vh" }}>
            
              <img src={picture} alt="homeLawyers" className="h-auto lg:max-h-full rounded-md"/>
            
          </div>

          <div lassName="flex lg:w-1/3">
            <ul
              style={{ height: "75vh", width: "30vh" }}
              className="menu bg-primary text-white rounded-md menu-lg w-full h-full flex flex-col justify-around"
            >
              <li>
                {user.administrador===true || user.cedulaAbogado ? (
                <Link
                    to="/home/customers"
                    className="flex items-center justify-center text-white hover:text-white hover:bg-accent"
                  >
                    <button>Clientes</button>
                  </Link>
                ) : undefined}
            </li>
              <li>
                {user.administrador===true ? (
                  <Link
                    to="/home/lawyers"
                    className="flex items-center justify-center text-white hover:text-white hover:bg-accent"
                  >
                    <button>Abogados</button>
                  </Link>
                ) : undefined}
              </li>
              <li>
                <Link
                  to="/home/detail"
                  className="flex items-center justify-center text-white hover:text-white hover:bg-accent"
                >
                  <button>Datos Personales</button>
                </Link>
              </li>
              <li>
                {user.administrador===true || user.cedulaAbogado ? (
                <Link
                    to="/home/cases"
                    className="flex items-center justify-center text-white hover:text-white hover:bg-accent"
                  >
                    <button>Casos</button>
                  </Link>
                ) : undefined}
            </li>
              <li>
                <Link
                  to="/home/documents"
                  className="flex items-center justify-center text-white hover:text-white hover:bg-accent"
                >
                  <button>Documentos</button>
                </Link>
              </li>
              <li>
                {/* {user.rol === "Administrador" ? ( */}
                <Link
                  to="/home/diary"
                  className="flex items-center justify-center text-white hover:text-white hover:bg-accent"
                >
                  <button>Agenda</button>
                </Link>
                {/* ) : undefined} */}
              </li>
              <li>
                {user.administrador===true || user.cedulaCliente ? (
                <Link
                    to="/home/payments"
                    className="flex items-center justify-center text-white hover:text-white hover:bg-accent"
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
                    className="flex items-center justify-center text-white hover:text-white hover:bg-accent"
                  >
                    <button>Estadisticas</button>
                  </Link>
                ) : undefined}
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center text-white hover:text-white hover:bg-accent"
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
