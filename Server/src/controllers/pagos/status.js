

  const obtenerPago = async (id) => {
    console.log("Payment id: ", id);
    try {
      const { data } = await axios.get(
        `https://api.mercadopago.com/v1/payments/${id}`,
        {
          headers: {
            Authorization:
              "Bearer TEST-3176577694700734-051711-d19831d5da8b20319a010655906a334c-1817941600",
          },
        }
      );
      console.log("Data obtener pago: ", data);
      return data;
    } catch (error) {
      window.alert("No se obtuvieron los datos del pago");
    }
  };

module.exports = {
  obtenerPago,
};
