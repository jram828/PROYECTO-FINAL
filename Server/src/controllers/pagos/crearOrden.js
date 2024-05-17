const { MercadoPagoConfig, Payment, Preference } = require("mercadopago");

// const { mercadopago } = require("mercadopago");

const crearOrden = async () => {
  // SDK de Mercado Pago

  // Agrega credenciales
  const client = new MercadoPagoConfig({
    accessToken:
      "TEST-7845349164975835-051714-6919a564464a369582bcbc8ff6f8cc4f-1817941600",
  });

  
const preference = new Preference(client);
  try {

    const { response } = await preference
  .create({
    body: {
      items: [
        {
          title: "Honorarios",
          quantity: 1,
          unit_price: 200,
        },
        // {
        //   title: req.body.description,
        //   unit_price: Number(req.body.price),
        //   quantity: Number(req.body.quantity),
        // },
      ],
      back_urls: {
        success: "https://legaltech-6u3y.onrender.com/webhook",
        failure: "https://legaltech-6u3y.onrender.com/webhook",
        pending: "https://legaltech-6u3y.onrender.com/webhook",
      },
      auto_return: "approved",
    },
  })
    console.log('Response crear orden:',response)
   return response
  } catch (error) {
    return error
}


  // // Step 2: Initialize the client object
  // const client = new MercadoPagoConfig({
  //   accessToken:
  //     "TEST-3176577694700734-051711-d19831d5da8b20319a010655906a334c-1817941600",
  //   options: { timeout: 5000, idempotencyKey: "PRIMERA PRUEBA" },
  // });

  // // Step 3: Initialize the API object
  // const payment = new Payment(client);

  // // Step 4: Create the request object
  // const body = {
  //   transaction_amount: 20,
  //   description: "honorarios",
  //   payment_method_id: "credit_card",
  //   payer: {
  //     email: "jram828@yahoo.com",
  //   },
  // };

  // // Step 5: Create request options object - Optional
  // const requestOptions = {
  //   idempotencyKey: "primera prueba",
  // };

  // // Step 6: Make the request
  // const newPayment=payment.create({ body, requestOptions }).then(console.log).catch(console.log);
  // mercadopago.configure({
  //   access_token:
  //     "TEST-7845349164975835-051714-6919a564464a369582bcbc8ff6f8cc4f-1817941600",
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

};

module.exports = { crearOrden };