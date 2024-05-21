import './landing.css';
import Login from '../../components/login/index';
import { Loginf} from "../../handlers/login";
import { useNavigate } from 'react-router-dom';



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
    <div className='hero min-h-screen bg-white'>
    <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start justify-center lg:justify-start">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-primary">Login now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
  )
}

export default Landing