import axios from "axios";

export async function postCitaHandlers(data) {
  const {
    titulo,
    descripcion, 
    fechaCita, 
    horaCita,
    idCaso,
  } = data;
  console.log("data del post", data);

  const URL = "https://legaltech-develop.onrender.com/citas";
  try {
    await axios.post(URL, {
      titulo: `${titulo}`,
      descripcion: `${descripcion}`,
      fechaCita: `${fechaCita}`,
      horaCita: `${horaCita}`,
      idCaso: `${idCaso}`,
    });
    
  } catch (error) {
   error.mesage
  }
}