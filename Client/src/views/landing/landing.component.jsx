import './landing.css';
import Login from '../../components/login/index';
import { Loginf} from "../../handlers/login";
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/layout';


function Landing() {

  const navigate = useNavigate();
const ClickHandlerCrear = (e) => {
    
   e.preventDefault();
   navigate("/crearusuario");
 };

 const ClickHandlerRecordatorio = (e) => {
  
 e.preventDefault();
 navigate("/password");

};
  return (
    <Layout>
    <div className='hero min-h-screen bg-white'>
    <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start justify-center lg:justify-start h-50">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-primary">Inicia Sesión</h1>
        <p className="py-6 text-primary">
          ¡Bienvenido a nuestro portal CRM para clientes y abogados! Descubre cómo gestionar casos, programar citas y acceder a documentos legales de manera fácil y segura. ¡Únete ahora y lleva tu práctica legal al siguiente nivel!
        </p>
      </div>
      <div className=''>
        <Login
          login={Loginf}
          clickHandlerRecordatorio={ClickHandlerRecordatorio}
          clickHandlerCrear={ClickHandlerCrear}
          className="card-body"
        />
      </div>
    </div>
    
  </div>
  </Layout>
  )
}

export default Landing