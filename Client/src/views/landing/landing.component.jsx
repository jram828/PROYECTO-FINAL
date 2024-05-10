import './landing.module.css';
import React from 'react';
import Login from '../../components/login/index';
import { Loginf, ClickHandlerRecordatorio } from "../../handlers/login";
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
    <div>
      <div>
        <p>Legal Tech</p>
        <Login
              login={Loginf}
              clickHandlerRecordatorio={ClickHandlerRecordatorio}
              clickHandlerCrear={ClickHandlerCrear}
            />   
      </div>
    </div>
  )
}

export default Landing