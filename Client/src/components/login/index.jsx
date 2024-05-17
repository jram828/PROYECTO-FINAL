import {useState} from "react";
// import { validar } from "../../utils/validacion";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch} from "react-redux";
import { setAuth, setUserToken } from "../../redux/actions";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

// import { ClickHandlerCrear, ClickHandlerRecordatorio, Loginf } from "../../handlers/login";


// eslint-disable-next-line react/prop-types
const Login = ({ clickHandlerRecordatorio, clickHandlerCrear}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // const [errores, setErrores] = useState({
  //   cedula: "",
  //   password: "",
  // });



  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleChange = (e) => {
    // setErrores(validar({ ...userData, [e.target.name]: e.target.value }));

    setUserData({
      ...userData,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  const submitHandler = async(e) => {
    e.preventDefault();

  const { email, password } = userData;
  console.log("Datos login:", email, password);

  try {
    const { data } = await axios(`/login/?email=${email}&password=${password}`);
    console.log("Login 2:", data);
    const { access } = data;
    console.log('Access: ',access)
    if (access) {
        dispatch(setAuth(access));
        navigate("/home");
      } else {
        window.alert("Usuario o contraseña incorrectos");
      }
  } catch (error) {
    window.alert("Usuario o contraseña incorrectos");
  }
  };

  const ResponseMessage = async (response) => {
   
    const user = jwtDecode(response.credential);
    // Loginf();
    dispatch(setUserToken(user));
  console.log("Datos login:", user.email);

    try {
      const { data } = await axios(`/clientes/?correo=${user.email}`);
      
    console.log("Login 2:", data);
      // const { access } = data;
      if (user.email === data[0].correo) {
        dispatch(setAuth(true));
        navigate("/home");
      } else {
        window.alert("Usuario o contraseña incorrectos");
      }
     
  } catch (error) {
    window.alert("Usuario o contraseña incorrectos");
    }
    
  };
  const errorMessage = (error) => {
    console.log(error);
  };


  return (
    <div className={style.containerLogin}>
      <form onSubmit={submitHandler}>
        <table>
          <tr>
            <td></td>
            <td colSpan={2} className={style.celdas}>
              {/* <img
                src={logo}
                alt="Logo Legaltech"
                style={{ height: "90px", width: "100%" }}
              /> */}
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="usuario" className={style.label}>
                Usuario:
              </label>
            </td>
            <td>
              <input
                type="text"
                name="email"
                id="username"
                placeholder="Ingrese su Usuario"
                value={userData.email}
                onChange={handleChange}
                className={style.input}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={4}>
              {/* {errores.cedula !== "" && (
                <h5 className="errores">{errores.cedula}</h5>
              )} */}
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label className={style.label} htmlFor="password">
                Contraseña:
              </label>
            </td>
            <td>
              <input
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
                value={userData.password}
                onChange={handleChange}
                className={style.input}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={4}>
              {/* {errores.password !== "" && (
                <h5 className="errores">{errores.password}</h5>
              )} */}
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="tipodeusuario" className={style.label}>Tipo de usuario:</label>
            </td>
            <td>
              <select name="tipodeusuario" id="idusuario" className={style.select}>
                <option value="">Elija una opcion</option>
                <option value="1">Administrador</option>
                <option value="2">Abogado</option>
                <option value="3">Cliente</option>
              </select>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <br></br>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className={style.celdas}></td>
            <td className={style.celdas}>
              <input
                type="button"
                name="cancelar"
                value="Cancelar"
                className="button"
              />
            </td>
            <td className={style.celdas}>
              {" "}
              {/* {errores.cedula || errores.password ? null : ( */}
                <input
                  type="submit"
                  value="Ingresar"
                  className="button"
                />
              {/* )} */}
            </td>
            <td className={style.celdas}></td>
          </tr>
          <tr>
            <td></td>
            <td className={style.celdas}>
              {/* <Link to={"/crearusuario"} onClick={clickHandlerCrear}>
                <button className="botonesiniciosesion">Crear Usuario</button>
              </Link> */}
              <input
                type="button"
                name="crearusuario"
                value="Crear Usuario"
                className="button"
                onClick={clickHandlerCrear}
              />
            </td>
            <td className={style.celdas}>
              <input
                type="button"
                name="password"
                value="¿Olvidó su contraseña?"
                className="button"
                onClick={clickHandlerRecordatorio}
              />
              {/* </Link> */}
            </td>
            <td></td>
          </tr>
        </table>
      </form>
      <div className={style.GoogleLogin}>
        <GoogleLogin onSuccess={ResponseMessage} onError={errorMessage}/>
      </div>
    </div>
  );
};
export default Login;
