import {useState} from "react";
// import { validar } from "../../utils/validacion";
import style from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
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
    rol:""
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

  const { email, password, rol } = userData;
  console.log("Datos login:", email, password,rol);

  try {
    const { data } = await axios(`/login/?email=${email}&password=${password}&rol=&${rol}`);
    console.log("Login 2:", data);
    const { access } = data;
    console.log('Access: ',access)
    if (access) {
      window.localStorage.setItem("loggedUser", JSON.stringify(data.usuario));
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
     const {rol } = userData;
  console.log("Datos login:", user.email,rol);
  try {
    const { data } = await axios(`/login/google/?email=${user.email}&rol=&${rol}`);
    
    console.log("Login 3:", data);
    // const { access } = data;
    // if (user.email === data[0].correo) {
        window.localStorage.setItem('loggedUser',JSON.stringify(data.usuario))
        dispatch(setAuth(true));
      navigate("/home");


      // } else {
      //   window.alert("Usuario o contraseña incorrectos");
      // }
     
  } catch (error) {
    window.alert("Usuario o contraseña incorrectos");
    }
    
  };
  const errorMessage = (error) => {
    console.log(error);
  };


  return (
    <div className="space-y-6 w-full max-w-lg p-6 bg-primary rounded-lg shadow-md">
      <form onSubmit={submitHandler}>
        <div className="flex justify-center mb-6">
          {/* <img
        src={logo}
        alt="Logo Legaltech"
        style={{ height: "90px", width: "100%" }}
      /> */}
        </div>

        <div className="input input-bordered flex items-center gap-2 mb-4">
          <label htmlFor="usuario" className={style.label}>
            Usuario:
          </label>
          <input
            type="text"
            name="email"
            id="username"
            placeholder="Ingrese su Usuario"
            value={userData.email}
            onChange={handleChange}
            className="grow"
          />
        </div>

        <div className="input input-bordered flex items-center gap-2 mb-4">
          <label className={style.label} htmlFor="password">
            Contraseña:
          </label>
          <input
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={userData.password}
            onChange={handleChange}
            className="grow"
          />
        </div>

        <div>
          <label htmlFor="tipodeusuario" className="">
            Tipo de usuario:
          </label>
          <select
            name="rol"
            id="idusuario"
            className="input select-bordered flex items-center text-lg pl-2 custom-select"
          >
            <option value="" className={style.customOption}>
              Tipo de usuario:
            </option>
            <option value="Administrador" className={style.customOption}>
              Administrador
            </option>
            <option value="Abogado" className={style.customOption}>
              Abogado
            </option>
            <option value="Cliente" className={style.customOption}>
              Cliente
            </option>
          </select>{" "}
        </div>
        <br />
        <div className="flex flex-col space-y-4">
          <div className="flex justify-center space-x-4">
            {/* <input
              type="button"
              name="consulta"
              value="Consulta"
              className="btn btn-accent w-40"
            /> */}
            <Link to="/home/consultation" className="btn btn-accent w-40">
              <button>Consultas</button>
            </Link>
            <input
              type="submit"
              value="Ingresar"
              className="btn btn-accent w-40"
            />
          </div>

          <div className="flex justify-center space-x-4">
            <input
              type="button"
              name="crearusuario"
              value="Crear Usuario"
              className="btn btn-accent w-40"
              onClick={clickHandlerCrear}
            />
            <input
              type="button"
              name="password"
              value="¿Olvidó su contraseña?"
              className="btn btn-accent w-40"
              onClick={clickHandlerRecordatorio}
            />
          </div>
        </div>
      </form>
      <div className="flex justify-center">
        <GoogleLogin onSuccess={ResponseMessage} onError={errorMessage} />
      </div>
    </div>
  );
};
export default Login;
