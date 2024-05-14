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
import LawyersPage from './views/lawyers/lawyers.component';
import CustomersPage from './views/customers/customers.component';
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
      
        <Route path='/home' element={<Home/>}/>
      <Route path='/home/lawyers' element={<LawyersPage/>}/>
      <Route path='/home/customers' element={<CustomersPage/>}/>
        <Route path='/home/detail' element={<Detail/>}/>
        <Route path='/home/detail/:id' element={<Detail/>}/>
        <Route path='/home/cases/:id' element={<Cases/>}/>
        <Route path='/home/cases/crearcaso' element={<CrearCaso/>}/>
        <Route path='/home/costumers/:id' element={<Detail/>}/>
        <Route path='/home/lawyers/:id' element={<Detail/>}/>
        <Route path='/home/documents/:id' element={<Documents/>}/>
        <Route path='/home/diary' element={<Diary/>}/>
        <Route path='/home/payments' element={<Payments/>}/>
        <Route path='/home/consultation' element={<Consultations/>}/>
        <Route path='/home/statistics' element={<Statistics/>}/>
        <Route path='/home/lawyers/crearabogado' element={<CrearAbogado/>}/>
        <Route path='/home/customers/crearcliente' element={<CreateCliente/>}/>
        {/*<Route path="/home" element={<Home />} />
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
          element={isAuthenticated ? <CrearCaso /> : <Landing />}
  />*/}
      </Routes>
    </div>
  );
}

export default App;