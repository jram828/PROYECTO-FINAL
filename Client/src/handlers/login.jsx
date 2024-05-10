import axios from "axios";
import {useNavigate} from "react-router-dom";
import { setAuth } from "../redux/actions";
import { useDispatch } from "react-redux";




export async function Loginf() {
  const navigate = useNavigate();
  try {
    navigate("/home");
  } catch (error) {
    window.alert("Usuario o contraseña incorrectos");
  }
}

export async function Login(userData) {
  const navigate = useNavigate();
     const dispatch = useDispatch();
    const { cedula, password } = userData;
    const URL = "/login";
    console.log("Datos login:", { cedula, password });
    try {
      const { data } = await axios(
        URL + `?cedula=${cedula}&password=${password}`
      );
      console.log("Login 2:", data);
      const { access } = data;
      //  setAccess(access);
      dispatch(setAuth(access));
      navigate("/home");
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
