const axios = require("axios");
const {
  createPagosClientes,
} = require("../pagosClientesControllers/postPagosClientes");

const obtenerPago = async (idPago) => {
  // console.log("Payment id: ", idPago);
  try {
    const { data } = await axios.get(
      `https://api.mercadopago.com/v1/payments/${idPago}`,
      {
        headers: {
          Authorization:
            "Bearer TEST-3176577694700734-051711-d19831d5da8b20319a010655906a334c-1817941600",
        },
      },
    );

    const idCaso = data.additional_info.items[0].id;
    const orderId = data.order.id;

    const {
      description,
      date_approved,
      id,
      payment_type_id,
      status,
      transaction_amount,
    } = data;

    const newPago = createPagosClientes(
      idCaso,
      description,
      date_approved,
      id,
      orderId,
      payment_type_id,
      status,
      transaction_amount,
    );
    return newPago;
  } catch (error) {
    console.log(error);
    // window.alert("No se obtuvieron los datos del pago");
  }
};


module.exports = {
  obtenerPago,
};
