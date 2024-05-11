import axios from "axios";

export async function createClient(userDataCreate) {
  const {
      cedulaCliente,
      nombre,
      apellido,
      correo,
      telefono,
      calle,
      numero,
      codigoPostal,
      ciudad,
      pais,
    } = userDataCreate;

  console.log("User data registro:", userDataCreate);

  const URL = "/clientes";
  try {
    await axios.post(URL, {
      correo: `${correo}`,
      nombre: `${nombre}`,
      apellido: `${apellido}`,
      cedulaCliente: `${cedulaCliente}`,
      telefono: `${telefono}`,
      calle: `${calle}`,
      ciudad: `${ciudad}`,
      numero: `${numero}`,
      codigoPostal: `${codigoPostal}`,
      pais: `${pais}`,
    });
    window.alert("Se ha registrado el cliente con éxito.");
  } catch (error) {
    window.alert("No fue posible registrar el cliente.");
  }
}
