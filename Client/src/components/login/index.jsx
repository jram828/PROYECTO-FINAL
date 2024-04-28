import { useState} from "react";
// import { validar } from "../../utils/validacion";
import "../../App.css";
import "./login.css";
import { Link } from "react-router-dom";


// import { GoogleLogin } from "@react-oauth/google";
// import { useDispatch } from "react-redux";
// import { setAuth } from "../../redux/actions";
import { ClickHandlerCrear, ClickHandlerRecordatorio, Loginf } from "../../handlers/login";

const Login = () => {
  const [userData, setUserData] = useState({
    cedula: "",
    password: "",
  });

  // const [errores, setErrores] = useState({
  //   cedula: "",
  //   password: "",
  // });

  // const dispatch = useDispatch();

  // const navigate = useNavigate();

  const handleChange = (e) => {
    // setErrores(validar({ ...userData, [e.target.name]: e.target.value }));

    setUserData({
      ...userData,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Loginf(userData);
  };

  const responseMessage = (response) => {
    // dispatch(setAuth(true));

    Loginf();
    // navigate("/home");
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className="containerLogin">
        <form onSubmit={submitHandler}>
              <label htmlFor="usuario" className="label">
                Usuario:
              </label>

              <input
                type="text"
                name="cedula"
                id="username"
                placeholder="Ingrese su Usuario"
                value={userData.cedula}
                onChange={handleChange}
              />
              {errores.cedula !== "" && (
                <h5 className="errores">{errores.cedula}</h5>
              )}
              <label className="label" htmlFor="password">
                Contraseña:
              </label>
              <input
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
                value={userData.password}
                onChange={handleChange}
              />
             {errores.password !== "" && (
                <h5 className="errores">{errores.password}</h5>
        )}
        <br />
             <label htmlFor="tipodeusuario">Tipo de usuario:</label>

              <select name="tipodeusuario" id="idusuario">
                <option value="">Elija una opcion</option>
                <option value="1">Administrador</option>
                <option value="2">Cliente</option>
              </select>
              <br />
              <input
                type="button"
                name="cancelar"
                value="Cancelar"
                className="botonesiniciosesion"
              />
              {errores.cedula || errores.password ? null : (
                <input
                  type="submit"
                  value="Ingresar"
                  className="botonesiniciosesion"
                />
        )}
        <br />
              <Link to={"/crearusuario"} onClick={ClickHandlerCrear}>
                <button className="botonesiniciosesion">Crear Usuario</button>
              </Link>
              <Link
                to={"/recordatoriocontrasena"}
                onClick={ClickHandlerRecordatorio}
              >
                <button className="botonesiniciosesion">
                  ¿Olvidó su contraseña?
                </button>
              </Link>
      </form>
      {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
    </div>
  );
};
export default Login;
