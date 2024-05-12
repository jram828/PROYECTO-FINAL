import axios from "axios";
import {useNavigate} from "react-router-dom";
//import { setAuth } from "../redux/actions";
//import { useDispatch } from "react-redux";
import store from "../../zustand/store";

setAuthenticated = store ((state)=> state.setAuthenticated ) ;

setUser = store ((state)=> state.setUser ) ;
isAuthenticated = store ((state)=> state.isAuthenticated ) ;


export async function Loginfo() {
  const navigate = useNavigate();
  try {
    navigate("/home");
  } catch (error) {
    window.alert("Usuario o contraseña incorrectos");
  }
}

export async function Loginf(userData) {
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  const { email } = userData;
  console.log("Datos login:", { email });
  const URL = "https://legaltech-6u3y.onrender.com/clientes";
  try {
    const { data } = await axios(URL + `email?email=${email}`);
    console.log("Login 2:", data);
    const { access } = data;

    if (email === data.correo) {
        //dispatch(setAuth(access));
        setAuthenticated(access);
        console.log("Authenticated2", isAuthenticated );
        navigate("/home");
      } else {
        window.alert("Usuario o contraseña incorrectos");
      }
  } catch (error) {
    window.alert("Usuario o contraseña incorrectos");
  }
}
//Acceder al modulo de crear usuario
export const ClickHandlerCrear = (e) => {
   const navigate = useNavigate();
  e.preventDefault();
  navigate("/crearusuario");
};

//Acceder al modulo de recordar contraseñas
export const ClickHandlerRecordatorio = (e) => {
   const navigate = useNavigate();
  e.preventDefault();
  navigate("/recordatoriocontrasena");
};
