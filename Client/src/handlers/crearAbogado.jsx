import axios from 'axios';



export async function postAbogado(data) {
  const {
    cedulaAbogado,
    matricula,
   nombre,
   apellido,
   correo,
   telefono,
   calle,
   numero,
   codigoPostal,
   ciudad,
   pais
    } = data;


  const URL = 'http://localhost:3001/abogados';
  try {
    await axios.post(URL, {
      correo: `${correo}`,
      nombre: `${nombre}`,
      apellido: `${apellido}`,
      cedulaAbogado: `${cedulaAbogado}`,
      matricula: `${matricula}`,
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

};
