import { Link } from 'react-router-dom';
import './password.css';
import Layout from '../../components/layout/layout';
import { useState } from 'react';
import axios from "axios";
import { recordarPassword } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

function Password() {

  const navigate = useNavigate()

    const [userData, setUserData] = useState({
      correo: "",
    });
  
  const handlerPassword = async(e) => {
     e.preventDefault();

    const { correo} = userData;
    console.log("Datos recordar password:", correo);

    try {
      await recordarPassword(correo);
      // console.log("Respuesta password:", data);
      window.alert("Se envió el recordatorio por email")
      navigate('/')

    } catch (error) {
      window.alert("No se envió el recordatorio");
    }
  }
    const handleChange = (e) => {
      // setErrores(validar({ ...userData, [e.target.name]: e.target.value }));
      setUserData({
        ...userData,
        [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
      });
    };
  
  return (
    
      <div className="flex items-center justify-center rounded-lg min-h-screen p-6 bg-white text-black">
        <div className="space-y-6  h-full p-6 bg-secondary rounded-lg shadow-md text-black">
        <h1 className="text-2xl font-bold text-black text-center">Recordar contraseña</h1>
        

        <form>
        
          
          <div className="recordar-password">
            <label className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black" htmlFor="correo">
              Email:
            <input
              type="email"
              name="correo"
              id="email"
              className="grow ml-2 text-black"
              onChange={handleChange}
            />
            </label>
          </div>
          
          <div className="flex justify-between">
          <Link to="/">
            <button className="btn btn-sm w-35 border border-accent bg-white hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={50.5} d="M244 400L100 256l144-144M120 256h292"></path></svg>
                  Volver
                </button>
            </Link>
            <button
              className="btn btn-sm w-40 bg-accent text-white hover:bg-primary hover:text-white"
              type="submit"
              name="Enviar"
              onClick={handlerPassword}
            >
              Enviar
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"></path></svg>
            </button>
          

            
          </div>
          
        </form>
        </div>
        
      </div>
    
  );
}

export default Password