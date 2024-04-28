import {useNavigate} from "react-router-dom";

var navigate = useNavigate();

export async function login() {
  try {
    navigate("/home");
  } catch (error) {
    window.alert("Usuario o contraseña incorrectos");
  }
}

//Acceder al modulo de crear usuario
export const clickHandlerCrear = (e) => {
  e.preventDefault();
  navigate("/crearusuario");
};

//Acceder al modulo de recordar contraseñas
export const clickHandlerRecordatorio = (e) => {
  e.preventDefault();
  navigate("/recordatoriocontrasena");
};
