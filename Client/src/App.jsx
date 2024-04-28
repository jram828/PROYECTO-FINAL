
//Importar modulos necesarios
import "./App.css";
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import CrearUsuario from "./components/crearusuario";
import RecordatorioContrasena from "./components/recordatoriocontrasena";
import axios from "axios";
import { useSelector } from "react-redux";
import Login from './components/login';
import { clickHandlerCrear, clickHandlerRecordatorio, login } from "./handlers/login";

function App() {

    const location = useLocation();

    const isAuthenticated = useSelector((state) => state.isAuthenticated);

    //Funcion para verificar datos de ingreso

  
  return (
    <div className="App">
      {location.pathname === "/home" ? (
        <div className="">
          <h1 className="titulo">PROYECTO FINAL</h1>
        </div>
      ) : undefined}
      <Routes>
        <Route
          path="/"
          element={
            <Login
              login={login}
              clickHandlerRecordatorio={clickHandlerRecordatorio}
              clickHandlerCrear={clickHandlerCrear}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App
