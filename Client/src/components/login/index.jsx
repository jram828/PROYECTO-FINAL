import {useState} from "react";
// import { validar } from "../../utils/validacion";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
//import { useDispatch} from "react-redux";
//import { setAuthenticated, setUserToken } from "../../zustand/actions";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import useAuthStore from "../../zustand/useAuthStore";
// import { useDispatch } from "react-redux";
// import { setAuthenticated } from "../../redux/actions";
// import { ClickHandlerCrear, ClickHandlerRecordatorio, Loginf } from "../../handlers/login";

// setAuthenticated = useAuthStore ((state)=> state.setAuthenticated );
// setUser = useAuthStore ((state)=> state.setUser );
// isAuthenticated = useAuthStore ((state)=> state.isAuthenticated );

// eslint-disable-next-line react/prop-types
const Login = ({ clickHandlerRecordatorio, clickHandlerCrear}) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const setAuthenticated = useAuthStore(state => state.setAuthenticated);
  const setUser = useAuthStore(state => state.setUser);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // const [errores, setErrores] = useState({
  //   cedula: "",
  //   password: "",
  // });



  //const dispatch = useDispatch();

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

  const { email } = userData;
  console.log("Datos login:", email);
  const URL = "https://legaltech-6u3y.onrender.com/clientes";
  try {
    const { data } = await axios(URL + `/email?email=${email}`);
    console.log("Login 2:", data);
    const { access } = data;

    if (email === data.correo) {
       setAuthenticated(access);
        console.log("Authenticated", isAuthenticated);
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
    setUser(user);
  console.log("Datos login:", user.email);
  const URL = "https://legaltech-6u3y.onrender.com/clientes";
    try {
    const { data } = await axios(URL + `/email?email=${user.email}`);
    console.log("Login 2:", data);
      // const { access } = data;
      if (user.email === data.correo) {
        setAuthenticated(true);
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
    <div className="containerLogin">
      <form onSubmit={submitHandler}>
        <table>
          <tr>
            <td></td>
            <td colSpan={2} className="celdas">
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
              <label htmlFor="usuario" className="label">
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
                className="input"
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
              <label className="label" htmlFor="password">
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
                className="input"
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
              <label htmlFor="tipodeusuario" className="label">Tipo de usuario:</label>
            </td>
            <td>
              <select name="tipodeusuario" id="idusuario" className="select">
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
            <td className="celdas"></td>
            <td className="celdas">
              <input
                type="button"
                name="cancelar"
                value="Cancelar"
                className="button"
              />
            </td>
            <td className="celdas">
              {" "}
              {/* {errores.cedula || errores.password ? null : ( */}
                <input
                  type="submit"
                  value="Ingresar"
                  className="button"
                />
              {/* )} */}
            </td>
            <td className="celdas"></td>
          </tr>
          <tr>
            <td></td>
            <td className="celdas">
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
            <td className="celdas">
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
      <div className="googleLogin">
        <GoogleLogin onSuccess={ResponseMessage} onError={errorMessage}/>
      </div>
    </div>
  );
};
export default Login;
