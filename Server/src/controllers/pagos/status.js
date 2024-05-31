import axios from "axios";
import {
  createPagosClientes,
} from "../pagosClientesControllers/postPagosClientes.js";

const obtenerPago = async (idPago) => {
  console.log("Payment id: ", idPago);
  try {
    const { data } = await axios.get(
      `https://api.mercadopago.com/v1/payments/${idPago}`,
      {
        headers: {
          Authorization:
            "Bearer APP_USR-7845349164975835-051714-ec5b987de7ec8e0f4239e0b93dc2fa4d-1817941600",
        },
      }
    );
      console.log('Respuesta obtener pago: ',data)
    // const idCaso = data.additional_info.items[0].id;
    // const orderId = data.order.id;

    // const {
    //   description,
    //   date_approved,
    //   id,
    //   payment_type_id,
    //   status,
    //   transaction_amount,
    // } = data;

    // const newPago = createPagosClientes(
    //   idCaso,
    //   description,
    //   date_approved,
    //   id,
    //   orderId,
    //   payment_type_id,
    //   status,
    //   transaction_amount,
    // );
    return data;
  } catch (error) {
    console.log(error);
    // window.alert("No se obtuvieron los datos del pago");
  }
};


export {
  obtenerPago,
};
