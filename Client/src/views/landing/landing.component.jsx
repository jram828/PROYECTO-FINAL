import './landing.css';
import Login from '../../components/login/index';
import { Loginf} from "../../handlers/login";
import { useNavigate } from 'react-router-dom';
import photo from "../../assets/login.jpg"


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
    
    <div className='hero min-h-screen bg-white p-12'>
    <div className="flex flex-row lg:flex-row-reverse items-center lg:items-start justify-center lg:justify-start h-full ">
      <div className="!w-2/3">

        <img src={photo} alt="" className='' />
      </div>
      <div className='h-full'>
        <Login
          login={Loginf}
          clickHandlerRecordatorio={ClickHandlerRecordatorio}
          clickHandlerCrear={ClickHandlerCrear}
          className="card-body"
        />
      </div>
    </div>
    
  </div>
 );
}

export default Landing