const { MercadoPagoConfig, Payment } = require("mercadopago");

const crearOrden = async () => {
  // Step 2: Initialize the client object
  const client = new MercadoPagoConfig({
    accessToken:
      "TEST-3176577694700734-051711-d19831d5da8b20319a010655906a334c-1817941600",
    options: { timeout: 5000, idempotencyKey: "PRIMERA PRUEBA" },
  });

  // Step 3: Initialize the API object
  const payment = new Payment(client);

  // Step 4: Create the request object
  const body = {
    transaction_amount: 20,
    description: "honorarios",
    payment_method_id: "COP",
    payer: {
      email: "jram828@yahoo.com",
    },
  };

  // Step 5: Create request options object - Optional
  const requestOptions = {
    idempotencyKey: "primera prueba",
  };

  // Step 6: Make the request
  payment.create({ body, requestOptions }).then(console.log).catch(console.log);
  // mercadopago.configure({
  //   access_token:
  //     "TEST-3176577694700734-051711-d19831d5da8b20319a010655906a334c-1817941600",
  // });

  // const newOrden = await mercadopago.preferences.create({
  //   item: [
  //     {
  //       title: "honorarios",
  //       unit_price: 20,
  //       currency_id: "COP",
  //       quantity: 1,
  //     },
  //   ],
  // });

  console.log("result crear orden:", payment);
  return newOrden;
};

module.exports = { crearOrden };