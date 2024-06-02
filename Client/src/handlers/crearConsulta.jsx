import axios from "axios";

export async function crearConsulta(data) {
  const { apellido, consulta, correo, nombre, telefono } = data;
  console.log("data del post consulta:", data);

  const URL = "/consultas";

  try {
    const response = await axios.post(URL, {
      apellido: apellido,
      nombre: nombre,
      consulta: consulta,
      correo: correo,
      telefono: 147852,
    });
    console.log("Response handler crear consulta: ", response);
    return response.data;
    // window.alert("Se ha registrado el usuario con éxito.");
  } catch (error) {
    window.alert("No fue posible registrar la consulta.");
  }
}
