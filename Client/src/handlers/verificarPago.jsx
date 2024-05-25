import axios from "axios";

export async function verificarPago(data) {
  const { id } = data;
  console.log("data del post pago:", data);

  const URL = "/pagos/status";

  try {
   const response = await axios.post(URL, {
      id: id
   });
    console.log('Response handler verificar pago: ', response)
    return response.data;
    // window.alert("Se ha registrado el usuario con éxito.");
  } catch (error) {
    window.alert("No fue posible verificar el pago.");
  }
}
