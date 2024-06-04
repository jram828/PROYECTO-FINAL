import { useState } from "react";
// import { validar } from "../../utils/validacion";
import  "./login.module.css";
import  "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { setAuth, setUserToken } from "../../redux/actions";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useDispatch} from "react-redux";
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup} from "firebase/auth";
import  {loginWithProvider } from "../../redux/actions";
import logoGit from "../../assets/logo.git.png"
import logoGit from "../../assets/logo.git.png"

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
<div className="min-h-screen  items-center bg-primary containerLoginParent">
  <form onSubmit={submitHandler} className="w-full max-w-lg p-8 rounded-lg">
    <div className="mb-6">
      <h2 className="text-center text-2xl font-bold text-white">Iniciar Sesión</h2>
    </div>
    
    <div className="mb-4">
      <label htmlFor="usuario" className="block text-sm font-medium text-white">
        Usuario:
      </label>
      <input
        type="text"
        name="email"
        id="username"
        placeholder="Ingrese su Usuario"
        value={userData.email}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
      />
    </div>
<div className="min-h-screen  items-center bg-primary containerLoginParent">
  <form onSubmit={submitHandler} className="w-full max-w-lg p-8 rounded-lg">
    <div className="mb-6">
      <h2 className="text-center text-2xl font-bold text-white">Iniciar Sesión</h2>
    </div>
    
    <div className="mb-4">
      <label htmlFor="usuario" className="block text-sm font-medium text-white">
        Usuario:
      </label>
      <input
        type="text"
        name="email"
        id="username"
        placeholder="Ingrese su Usuario"
        value={userData.email}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="password" className="block text-sm font-medium text-white">
        Contraseña:
      </label>
      <input
        name="password"
        type="password"
        placeholder="Ingrese su contraseña"
        value={userData.password}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-sm font-medium text-white">
        Contraseña:
      </label>
      <input
        name="password"
        type="password"
        placeholder="Ingrese su contraseña"
        value={userData.password}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
      />
    </div>

        <div>
          <select
            name="rol"
            id="rol"
            onChange={handleChange}
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
            {/* <input
              type="button"
              name="crearusuario"
              value="Crear Usuario"
              className="btn btn-accent w-40"
              onClick={clickHandlerCrear}
            /> */}
            <input
              type="button"
              name="password"
              value="¿Olvidó su contraseña?"
              className="btn btn-accent w-40"
              onClick={clickHandlerRecordatorio}
            />
            <button
              onClick={() => handleSignIn(githubProvider)}
              className="btn btn-accent w-40"
            >
              Sign in with GitHub
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-center">
        <GoogleLogin onSuccess={ResponseMessage} onError={errorMessage} />
      </div>
      <div className={style.github}></div>
    </div>
  );
};
export default Login;
