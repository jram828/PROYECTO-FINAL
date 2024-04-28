import {useNavigate} from "react-router-dom";



export async function Loginf() {
  const navigate = useNavigate();
  try {
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
