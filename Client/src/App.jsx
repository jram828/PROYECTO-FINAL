//Importar modulos necesarios
import Landing from './views/landing/landing.component'
import Home from './views/home/home.component';
import Detail from './views/detail/detail.component';
import Cases from './views/cases/cases.component';
import Documents from './views/documents/documents.component';
import Diary from './views/diary/diary.components';
import Payments from './views/payments/payments.component';
import Consultations from './views/consultations/consultations.component';
import Statistics from './views/statistics/statistics.component';
import CreateUser from './views/createUser/createUser.component'
import Password from './views/password/password.component';
import CrearAbogado from './views/crearAbogado/crearAbogado.component'
import CreateCliente from './components/createclient/index'
import CrearCaso from './views/CrearCaso/crearCaso';
import "./App.css";
import { Routes, Route} from "react-router-dom";
import { useSelector } from 'react-redux';
import Costumers from './components/costumers/costumers.component';
import Lawyers from './components/lawyers/lawyers.components';

//const { URL } = process.env;
// axios.defaults.baseURL = "https://localhost:3001";

function App() {
  
    // const location = useLocation();
   const isAuthenticated = useSelector((state) => state.isAuthenticated);

    //Funcion para verificar datos de ingreso

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/password" element={<Password />} />
        <Route path="/crearusuario" element={<CreateUser />} />
        {/* <Route
          path="/generarfactura"
          element={isAuthenticated ? <GenerarFactura /> : <Landing />}
        />
        <Route
          path="/invoice"
          element={isAuthenticated ? <Invoice /> : <Landing />}
        />
        <Route
          path="/authorization"
          element={isAuthenticated ? <Authorization /> : <Landing />}
        />
        <Route
          path="/poder"
          element={isAuthenticated ? <Poder /> : <Landing />}
        />
        <Route
          path="/bankruptcy"
          element={isAuthenticated ? <Bankruptcy /> : <Landing />}
        />
        <Route
          path="home/clientregister"
          element={isAuthenticated ? <Client /> : <Landing />}
        />
        <Route
          path="home/reminders"
          element={isAuthenticated ? <ConfigReminders/> : <Landing />}
        />

        <Route
          path="home/contract"
          element={isAuthenticated ? <Contract /> : <Landing />}
        /> */}

        <Route path="/home" element={<Home />} />
        <Route
          path="/home/detail/:id"
          element={<Detail />}
        />
        <Route
          path="/home/cases/:id"
          element={<Cases />}
        />
        <Route
          path="/home/costumers/:id"
          element={<Costumers />}
        />
        <Route
          path="/home/lawyers/:id"
          element={<Lawyers />}
        />
        <Route
          path="/home/documents/:id"
          element={<Documents />}
        />
        <Route
          path="/home/diary"
          element={<Diary />}
        />
        <Route
          path="/home/payments"
          element={<Payments />}
        />
        <Route
          path="/home/consultations"
          element={<Consultations />}
        />
        <Route
          path="/home/statistics"
          element={<Statistics />}
        />
        <Route
          path="/home/crearabogado"
          element={<CrearAbogado />}
        />

        <Route
          path="/home/crearcliente"
          element={<CreateCliente />}
        />
        <Route
          path="/home/crearcaso"
          element={<CrearCaso />}
        />
      </Routes>
    </div>
  );
}

export default App;