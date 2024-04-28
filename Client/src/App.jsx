
//Importar modulos necesarios
import { useNavigate } from "react-router-dom";
import "./App.css";
import { Routes, Route, useLocation} from "react-router-dom";
import Login from './components/login';
import { Loginf, ClickHandlerCrear, ClickHandlerRecordatorio } from "./handlers/login";

function App() {

    const location = useLocation();


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
              login={Loginf}
              clickHandlerRecordatorio={ClickHandlerRecordatorio}
              clickHandlerCrear={ClickHandlerCrear}
            />
          }
        />
        
      </Routes>
    </div>
  );
}

export default App
