import { useState } from "react";
// import { validar } from "../../utils/validacion";
import style from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { setAuth, setUserToken } from "../../redux/actions";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useDispatch} from "react-redux";
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup} from "firebase/auth";
import  {loginWithProvider } from "../../redux/actions";


// import { ClickHandlerCrear, ClickHandlerRecordatorio, Loginf } from "../../handlers/login";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCgmLrDf4mM13hD6f47Yeq8KE7IvnwusC4",
  authDomain: "legal-tech1111.firebaseapp.com",
  projectId: "legal-tech1111",
  storageBucket: "legal-tech1111.appspot.com",
  messagingSenderId: "1037769772117",
  appId: "1:1037769772117:web:919ee3a58c4809fafe18dc",
  measurementId: "G-G0WCGL9H5B",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();


// eslint-disable-next-line react/prop-types
const Login = ({ clickHandlerRecordatorio}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    rol: "",
  });


const dispatch = useDispatch();
 
  const handleSignIn = (provider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const credentials = {
          email: user.email,
          displayName: user.displayName,
          uid: user.uid,
        };
        dispatch(loginWithProvider(credentials));
        const { rol } = userData;
        console.log("Datos login:", user.email, rol);
              const { data } = axios(
        `/login/google/?email=${user.email}&rol=&${rol}`
      );

      console.log("Login 3:", data);
      // const { access } = data;
      // if (user.email === data[0].correo) {
      window.localStorage.setItem("loggedUser", JSON.stringify(data.usuario));
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  };



  // const [errores, setErrores] = useState({
  //   cedula: "",
  //   password: "",
  // });

  const navigate = useNavigate();
  const handleChange = (e) => {
    // setErrores(validar({ ...userData, [e.target.name]: e.target.value }));

    setUserData({
      ...userData,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  
    const { email, password, rol } = userData;
    console.log("Datos login:", email, password, rol);
  
    try {
      const { data } = await axios(`/login/?email=${email}&password=${password}&rol=${rol}`);
      console.log("Login 2:", data);
      const { access } = data;
      console.log("Access: ", access);
  
      if (access === true) {
        window.localStorage.setItem("loggedUser", JSON.stringify(data.usuario));
        dispatch(setAuth(access));
        
        if (data.usuario.administrador || data.usuario.cedulaAbogado) {
          navigate("/home/customers");
        } else if (data.usuario.cedulaCliente) {
          navigate("/home/datos");
        } else {
          navigate("/home");
        }
      } else {
        window.alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      window.alert("Usuario o contraseña incorrectos");
    }
  }

  const ResponseMessage = async (response) => {
    const user = jwtDecode(response.credential);
    // Loginf();
    dispatch(setUserToken(user));
    const { rol } = userData;
    console.log("Datos login:", user.email, rol);
    try {
      const { data } = await axios(
        `/login/google/?email=${user.email}&rol=&${rol}`
      );

      console.log("Login 3:", data);
      // const { access } = data;
      // if (user.email === data[0].correo) {
      window.localStorage.setItem("loggedUser", JSON.stringify(data.usuario));
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
    <div className="space-y-3 w-full max-w-lg p-6 bg-white ">
      <h1 className="text-2xl font-bold text-primary">Inicia Sesión</h1>
        <p className="py-1 text-primary">
          ¡Bienvenido al portal CRM para clientes y abogados! 
        </p>
      <form onSubmit={submitHandler}>
        {/* <div className="flex justify-center mb-6"> */}
          {/* <img
        src={logo}
        alt="Logo Legaltech"
        style={{ height: "90px", width: "100%" }}
      /> */}
        {/* </div> */}

        <label htmlFor="usuario" >
          <span className="label-text !text-black text-lg">Usuario: </span>
          </label>
        <div className="input mt-1 !border-black text-neutral flex items-center gap-2 mb-4">
          <input
            type="text"
            name="email"
            id="username"
            placeholder="Ingrese su Usuario"
            value={userData.email}
            onChange={handleChange}
            className="grow ml-2 text-black"
          />
        </div>

        <label htmlFor="password">
          <span className="label-text !text-black text-lg">Contraseña: </span>
        </label>
        <div className="input mt-1 !border-black text-neutral flex items-center gap-2 mb-4">
          
          <input
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={userData.password}
            onChange={handleChange}
            className="grow ml-2 text-black"
          />
        </div>

        <label htmlFor="password">
          <span className="label-text !text-black text-lg">Tipo de Usuario: </span>
        </label>
        <div >
          <select
            name="rol"
            id="rol"
            onChange={handleChange}
            className="w-full h-12 p-2 mt-1 border text-md border-black rounded-lg bg-secondary text-quaternary focus:outline-none"
            // "input mt-1 !border-black text-neutral flex items-center gap-2 mb-4"
          >
            <option value="" selected hidden className="text-black text-lg">
              Seleccione el tipo de usuario
            </option>
            <option value="Administrador" className="text-black text-lg">
              Administrador
            </option>
            <option value="Abogado" className="text-black text-lg">
              Abogado
            </option>
            <option value="Cliente" className="text-black text-lg">
              Cliente
            </option>
          </select>{" "}
        </div>
        <br />
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between space-x-4">
            <Link to="/home/consultation" className="">
              <a className="text-lg text-accent">Consultas</a>
            </Link>
            <a
              type="button"
              name="password"
              value="¿Olvidó su contraseña?"
              className="text-lg text-accent cursor-pointer"
              onClick={clickHandlerRecordatorio}
            >¿Olvidó su contraseña?</a>
            
          </div>

          <div className="flex justify-center space-x-4">
            {/* <input
              type="button"
              name="crearusuario"
              value="Crear Usuario"
              className="btn btn-accent w-40"
              onClick={clickHandlerCrear}
            /> */}
            <input
              type="submit"
              value="Ingresar"
              className="btn btn-md btn-accent w-full"
            />
          </div>
        </div>
      </form>
      <div className="flex items-center justify-center gap-2">
  <GoogleLogin
    onSuccess={ResponseMessage}
    onError={errorMessage}
    className="btn btn-sm w-1/2 h-10"
  />
  <button
    onClick={() => handleSignIn(githubProvider)}
    className="btn btn-sm w-1/2 h-10 bg-white hover:bg-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="black"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      />
    </svg>
    Sign in with GitHub
  </button>
</div>

      {/* <div className={style.github}></div> */}
    </div>
  );
};
export default Login;
