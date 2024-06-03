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
    <Layout>
      <div className="contenedorrecordatorio">
        <h1 className="titulo">Recordar contraseña</h1>
        <br />

        <form>
          <br />
          <br />
          <br />
          <div className="recordar-password">
            <label className="label-password" htmlFor="correo">
              Email:
            </label>
            <input
              type="email"
              name="correo"
              id="email"
              onChange={handleChange}
            />
          </div>
          <br />
          <br />
          <div className="recordar-password">
            <input
              className="btn btn-accent w-40"
              type="submit"
              name="Enviar"
              onClick={handlerPassword}
            />
            <br />
            <br />

            <Link to="/">
              <input
                type="button"
                name="volver"
                value="volver"
                className="btn btn-accent w-40"
              />
            </Link>
          </div>
          <br />
          <br />
        </form>
      </div>
    </Layout>
  );
}

export default Password