//Importar modulos necesarios
import Landing from './views/landing/landing.component'
import Home from './views/home/home.component';
import Detail from './views/detail/detail.component';
import Cases from './views/cases/cases.component';
import Documents from './views/documents/documents.component';
import Diary from './views/diary/diary.components';
import Payments from './views/payments/payments.component';
import Consultations from './views/consultations/consultations.component';
// import Statistics from './views/allConsultation/allConsultation';
import CreateUser from './views/createUser/createUser.component'
import Password from './views/password/password.component';
import CrearAbogado from './views/crearAbogado/crearAbogado.component'
import CreateCliente from './components/createclient/index'
import CrearCaso from './views/CrearCaso/crearCaso';
import DetailCases from './views/detailCases/detailCases'
import Data from './views/datosPersonales/datosPersonales.component';
import AllConsultations from './views/allConsultation/allConsultation';
import "./App.css";
import { Routes, Route, Outlet} from "react-router-dom";
// import { useSelector } from 'react-redux';
import LawyersPage from './views/lawyers/lawyers.component';
import CustomersPage from './views/customers/customers.component';
import axios from "axios";
import Status from './views/status';
// import Review from './components/reviewadmin/review.jsx';
import Contrato from './views/contrato/index.jsx';
import Poder from './views/poder/index.jsx';

// const VITE_SECRET_KEY =
//   'sk_test_51PKAEZRwrbUIzCadXKYTM0PPKAfgjU35yaufcCpIKD1mYMnr84hN1ZSqIvxdaFSZ8jZFu9ej95uyJKVUznOZgPXj00LwKPCzW';
// const URL = import.meta.env.VITE_URL_BACK;
// const SECRETKEY = import.meta.env.VITE_SECRET_KEY;
// axios.defaults.baseURL = "https://legaltech-develop.onrender.com";
axios.defaults.baseURL = "https://legaltech-develop.onrender.com";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_51PKAEZRwrbUIzCaduqontm4eNfQOAizaLdB2SaxkMSzQeUiBIBYUJetxGEXuNihUg6y0kFibN3kGJai5Fec5jKWo00YKuqtYox');

function App() {
  
  // console.log("Stripe env:", VITE_SECRET_KEY);
    // const location = useLocation();
  //  const isAuthenticated = useSelector((state) => state.isAuthenticated);
    //Funcion para verificar datos de ingreso
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: `${VITE_SECRET_KEY}`,
  // };

  return (
    <div className="App">
      {/* <Elements stripe={stripePromise} options={options}> */}
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/password" element={<Password />} />
        <Route path="/crearusuario" element={<CreateUser />} />
        <Route path="/home/*" element={<LayoutWithNav />}>
        <Route path="lawyers" element={<LawyersPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="datos" element={<Data />} />
        <Route path="detail/:cedula" element={<Detail />} />
        <Route path="cases" element={<Cases />} />
        <Route path="cases/:id" element={<DetailCases />} />
        <Route path="cases/crearcaso" element={<CrearCaso />} />
        <Route path="costumers/:id" element={<Detail />} />
        <Route path="lawyers/:id" element={<Detail />} />
        <Route path="documents" element={<Documents />} />
        <Route path="diary" element={<Diary />} />
        {/* <Route path="review" element={<Review />} /> */}
        <Route path="payments" element={<Payments />} />
        <Route path="payments/status" element={<Status />} />
        <Route path="consultation" element={<Consultations />} />
        <Route path="allconsultations" element={<AllConsultations />} />
        <Route path="lawyers/crearabogado" element={<CrearAbogado />} />
        <Route path="documentos" element={<Documents />} />
        <Route path="documentos/contrato" element={<Contrato />} />
        <Route path="documentos/poder" element={<Poder />} />
        <Route path="customers/crearcliente" element={<CreateCliente />} />
      </Route>

        {/* <Route path="/" element={<Landing />} />

        <Route path="/password" element={<Password />} />
        <Route path="/crearusuario" element={<CreateUser />} />

        <Route path="/home" element={<Home />} />
        <Route path="/home/lawyers" element={<LawyersPage />} />
        <Route path="/home/customers" element={<CustomersPage />} />
        <Route path="/home/datos" element={<Data />} />
        <Route path="/home/detail/:cedula" element={<Detail />} />
        <Route path="/home/cases" element={<Cases />} />
        <Route path="/home/cases/:id" element={<DetailCases />} />
        <Route path="/home/cases/crearcaso" element={<CrearCaso />} />
        <Route path="/home/review" element={<Review />} />
        <Route path="/home/costumers/:id" element={<Detail />} />
        <Route path="/home/lawyers/:id" element={<Detail />} />
        <Route path="/home/documents" element={<Documents />} />
        <Route path="/home/diary" element={<Diary />} />
        <Route path="/home/payments" element={<Payments />} />
        <Route path="/home/payments/status" element={<Status />} />
        <Route path="/home/consultation" element={<Consultations />} />
        <Route path="/home/allconsultations" element={<AllConsultations />} />
        <Route path="/home/lawyers/crearabogado" element={<CrearAbogado />} />
        <Route path="/home/documentos" element={<Documents />} />
        <Route path="/home/documentos/contrato" element={<Contrato />} />
        <Route path="/home/documentos/poder" element={<Poder />} />
        <Route
          path="/home/customers/crearcliente"
          element={<CreateCliente />}
        /> */}

        {/*
        <Route
          path="/home/crearcaso"
          element={isAuthenticated ? <CrearCaso /> : <Landing />}
  />*/}

      </Routes>
      {/* </Elements> */}
    </div>
  );
}

function LayoutWithNav() {
  return (
    <div className="flex h-screen">
      {/* Barra de navegación a la izquierda */}
      <Home className="w-1/4 bg-primary text-white" />
      
      {/* Contenedor principal del contenido a la derecha */}
      <div className="flex-1 w-3/4 bg-primary p-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}


export default App;