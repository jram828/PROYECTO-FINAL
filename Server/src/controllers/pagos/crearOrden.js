const { MercadoPagoConfig, Preference } = require("mercadopago");
require("dotenv").config();
const { ACCESSTOKEN } = process.env;


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
        payment_methods: {
          excluded_payment_methods: [],
          excluded_payment_types: [],
          installments: 12,
        },
        items: [
          {
            title: item.description,
            description: item.description,
            quantity: Number(item.quantity),
            unit_price: Number(item.unit_price),
            id: item.id,
          },
        ],
        payer: {
          // email: req.body.payer,
          email: "test_user_997292459@testuser.com",
        },

        back_urls: {
          success:
            "https://proyecto-final-develop.vercel.app/#/home/payments/status",
          failure: "https://proyecto-final-develop.vercel.app/#/home",
          pending: "https://proyecto-final-develop.vercel.app/#/home",
        },
        notification_url:
          "https://legaltech-develop.onrender.com/pagos/webhook",
        auto_return: "approved",
      },
    });
    console.log('Response crear orden:',response)
   return response
  } catch (error) {
    return error
}


};

module.exports = { crearOrden };