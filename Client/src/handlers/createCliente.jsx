import axios from "axios";

export async function postCliente(userDataCreate) {
  const {
      cedulaCliente,
      nombre,
      apellido,
      correo,
      password,
      telefono,
      calle,
      numero,
      codigoPostal,
      ciudad,
    pais,
      imagen,
    } = userDataCreate;

  console.log("User data registro:", userDataCreate);
  

  const URL = "/clientes";
  try {
    await axios.post(URL, {
      cedulaCliente: `${cedulaCliente}`,
      nombre: `${nombre}`,
      apellido: `${apellido}`,
      correo: `${correo}`,
      password: `${password}`,
      telefono: `${telefono}`,
      calle: `${calle}`,
      numero: `${numero}`,
      ciudad: `${ciudad}`,
      codigoPostal: `${codigoPostal}`,
      pais: `${pais}`,
      imagen: `${imagen}`,
    });
   
  } catch (error) {
    throw error
  }
}
