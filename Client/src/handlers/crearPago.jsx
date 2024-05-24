import axios from "axios";
import {uuidv4} from "uuidv4"

export async function crearPago(data) {
  const { description, quantity, unit_price,cedulaCliente } = data;
  console.log("data del post pago:", data);

  const URL = "/pagos/crearorden";
  const idempotencyKey = uuidv4()
  console.log("Idempotency key: ", idempotencyKey);
  try {
   const response = await axios.post(URL, {
      description: description,
      quantity: quantity,
      unit_price: unit_price,
      id: cedulaCliente
   },{headers:{"X-Idempotency-Key":idempotencyKey}});
    console.log('Response handler crear pago: ', response)
    return response.data;
    // window.alert("Se ha registrado el usuario con éxito.");
  } catch (error) {
    window.alert("No fue posible registrar el pago.");
  }
}
