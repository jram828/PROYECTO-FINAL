import axios from "axios";

export async function postCaso(data) {
  const {
    cedulaAbogado,
    cedulaCliente,
    fecha,
    fechaFin,
    descripcion,
    TipoDeCasoid,
  } = data;
  console.log("data del post", data);

  const URL = "/casos";
  try {
    await axios.post(URL, {
      cedulaCliente: `${cedulaCliente}`,
      cedulaAbogado: `${cedulaAbogado}`,
      fecha: `${fecha}`,
      fechaFin: `${fechaFin}`,
      descripcion: `${descripcion}`,
      TipoDeCasoid: `${TipoDeCasoid}`,
      
    });
   
    
  } catch (error) {
    throw error
  }
}
 