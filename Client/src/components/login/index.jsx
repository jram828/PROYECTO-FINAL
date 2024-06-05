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
    <div className="space-y-6 w-full max-w-lg p-6 bg-white ">
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
        <div className="input !border-neutral text-neutral flex items-center gap-2 mb-4">
          <input
            type="text"
            name="email"
            id="username"
            placeholder="Ingrese su Usuario"
            value={userData.email}
            onChange={handleChange}
            className="grow ml-2"
          />
        </div>

        <label className={style.label} htmlFor="password">
          <span className="label-text !text-black text-lg">Contraseña: </span>
        </label>
        <div className="input !border-neutral text-neutral flex items-center gap-2 mb-4">
          
          <input
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={userData.password}
            onChange={handleChange}
            className="grow"
          />
        </div>

        <label className={style.label} htmlFor="password">
          <span className="label-text !text-black text-lg">Tipo de Usuario: </span>
        </label>
        <div>
          <select
            name="rol"
            id="rol"
            onChange={handleChange}
            className="input border text-xs !border-black rounded-lg bg-secondary text-black focus:outline-none"
          >
            <option value="" className="text-black">
              Tipo de usuario:
            </option>
            <option value="Administrador" className="text-black">
              Administrador
            </option>
            <option value="Abogado" className="text-black">
              Abogado
            </option>
            <option value="Cliente" className="text-black">
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
      <div className="flex-column  justify-center">
        <GoogleLogin onSuccess={ResponseMessage} onError={errorMessage} />
        <button
              onClick={() => handleSignIn(githubProvider)}
              className="btn btn-md w-full bg-white mt-2 "
            >
              Sign in with GitHub
            </button>
      </div>
      <div className={style.github}></div>
    </div>
  );
};
export default Login;
