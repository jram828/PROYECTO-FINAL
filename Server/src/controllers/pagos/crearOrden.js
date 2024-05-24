const { MercadoPagoConfig, Payment, Preference } = require("mercadopago");
require("dotenv").config();
const { ACCESSTOKEN} = process.env;

const crearOrden = async (item) => {
  // SDK de Mercado Pago

  // Agrega credenciales
  const client = new MercadoPagoConfig({
    accessToken:
      ACCESSTOKEN,
  });

  console.log('Body crear orden: ',item)
const preference = new Preference(client);
  try {

    const response = await preference.create({
      body: {
        // payment_methods: {
        //   excluded_payment_methods: [],
        //   excluded_payment_types: [],
        //   installments: 12,
        // },
        items: [
          {
            title: item.description,
            description: item.description,
            quantity: Number(item.quantity),
            unit_price: Number(item.unit_price),
          },
        ],
        back_urls: {
          success:
            "https://proyecto-final-develop.vercel.app/#/home",
          failure: "https://proyecto-final-develop.vercel.app/#/home",
          pending:
            "https://proyecto-final-develop.vercel.app/#/home",
        },
        notification_url:
          "https://legaltech-develop.onrender.com/#/pagos/webhook",
        auto_return: "approved",
      },
    });
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